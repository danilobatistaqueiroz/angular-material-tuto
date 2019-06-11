import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../core/api.service";
import {Router} from "@angular/router";
declare var VMasker: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent 
implements OnInit, AfterContentInit, AfterViewInit {
  tipoDoc: string = "cpf";
  maskCpf: string = "999.999.999-99";
  maskCnpj: string = "99.999.999/9999-99";

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      documento: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  ngAfterContentInit() {
  	VMasker(document.querySelector("#documento")).maskPattern(this.maskCpf);
  }

  ngAfterViewInit() {
  }

  docOnKeyUp(){
  	let tipo = this.tipoDoc;
  	let len = (<HTMLInputElement>document.getElementById("documento")).value.length;
  	if(len>14 && tipo=="cpf"){
  		tipo="cnpj";
  		VMasker(document.querySelector("#documento")).maskPattern(this.maskCnpj);
  	} else if (len<=14 && tipo=="cnpj") {
  		tipo="cpf";
  		VMasker(document.querySelector("#documento")).maskPattern(this.maskCpf);
  	}
  	this.tipoDoc = tipo;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      documento: this.loginForm.controls.documento.value,
      password: this.loginForm.controls.password.value
    }
    this.apiService.login(loginPayload).subscribe(data => {
      console.log(data);
      if(data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        this.router.navigate(['list-user']);
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  getUsers(){
    console.log('getUsers');
    this.apiService.getUsers().subscribe(data => {
        console.log(data);
    });
  }
  createUser(){
    console.log('createUser');
    let user = new User();
    user.userId=100;
    this.apiService.createUser(user).subscribe(data => {
        console.log(data);
    });
  }
}

  class User{
    userId:number;
    firstName:string;
    lastName:string;
    password:string;
    username:string;
    age:number;
    salary:number;
    roles:string;
  };