import { Component, OnInit , Inject } from '@angular/core';
import {Router} from "@angular/router";
import {Menu} from "../../_models/menu";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../../_services/api.service";

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  menu: Menu;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let id = window.localStorage.getItem("editMenuId");
    if(!id) {
      alert("Invalid action.")
      this.router.navigate(['list-menu']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      menuName: ['', Validators.required],
      position: ['', Validators.required],
      items: ['']
    });
    this.apiService.getMenuById(+id)
      .subscribe( data => {
        this.editForm.setValue(data); //data.result
      });
  }

  onSubmit() {
    this.apiService.updateMenu(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Menu updated successfully.');
            this.router.navigate(['list-menu']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
