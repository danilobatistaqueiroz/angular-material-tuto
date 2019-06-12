import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService, AuthenticationService} from "../_services";
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
  
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private authenticationService: AuthenticationService) { }

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
    console.log('onSubmit');
    if (this.loginForm.invalid) {
      return;
    }
    //const loginPayload = {
      let documento:string = this.loginForm.controls.documento.value;
      let password:string = this.loginForm.controls.password.value;
    //}
    console.log('chamando login');
    this.authenticationService.login(documento, password).subscribe(data => {
      if(data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        this.router.navigate(['home']);
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }
  
}