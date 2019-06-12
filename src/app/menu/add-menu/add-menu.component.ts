import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../_services/api.service";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      menuName: ['', Validators.required],
      position: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createMenu(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-menu']);
      });
  }

}
