import { Component, OnInit , Inject } from '@angular/core';
import {Router} from "@angular/router";
import {Menu} from "../../model/menu.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../../core/api.service";

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
    let menuId = window.localStorage.getItem("editMenuId");
    if(!menuId) {
      alert("Invalid action.")
      this.router.navigate(['list-menu']);
      return;
    }
    this.editForm = this.formBuilder.group({
      menuId: [''],
      menuName: ['', Validators.required],
      position: ['', Validators.required],
      items: ['']
    });
    this.apiService.getMenuById(+menuId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
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
