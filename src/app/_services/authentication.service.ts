import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {ApiResponse} from "../_models/api.response";
import { User, Role } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(documento: string, password: string) : Observable<ApiResponse> {
        console.log('fazendo o login');
        let data = `{
          "id": "1",
          "documento": "05947747000175",
          "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4MTIzIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vZGV2Z2xhbi5jb20iLCJpYXQiOjE1NjAyODM5MzMsImV4cCI6MTU2MDMwMTkzM30.dIw3SdyqjfFPjbg1G_CJytZJRjpVaycdcExc2bx1gHk",
          "username": "alex123"
        }`;
        let retorno = new ApiResponse();
        retorno.result = data;
        retorno.status = 200;
        retorno.message = 1;
        localStorage.setItem('currentUser', data);
        let user = new User();
        user.documento = "05947747000175";
        user.id=1;
        user.username = "alex123";
        user.role = [Role.Admin];
        this.currentUserSubject.next(user);
        return of(retorno);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}