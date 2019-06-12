import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../_models/user";
import {Role} from "../_models/role";
import {Menu} from "../_models/menu";
import {Observable, of} from "rxjs/index";
import {ApiResponse} from "../_models/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  //baseUrl: string = `${config.apiUrl}/`;
  baseUrl: string = "api/";
  baseUserUrl: string = this.baseUrl+'users/';
  baseRoleUrl: string = this.baseUrl+'roles/';
  baseMenuUrl: string = this.baseUrl+'menus/';

  login(loginPayload) : Observable<ApiResponse> {
    let data = {
      documento: "05947747000175",
      token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4MTIzIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vZGV2Z2xhbi5jb20iLCJpYXQiOjE1NjAyODM5MzMsImV4cCI6MTU2MDMwMTkzM30.dIw3SdyqjfFPjbg1G_CJytZJRjpVaycdcExc2bx1gHk",
      username: "alex123"
    };
    let retorno = new ApiResponse();
    retorno.result = data;
    retorno.status = 200;
    retorno.message = 1;
    return of(retorno);
    //return this.http.post<ApiResponse>(this.baseUrl + 'auth', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUserUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUserUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUserUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUserUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUserUrl + id);
  }

  getMenus() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseMenuUrl);
  }

  getMenuById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseMenuUrl + id);
  }

  createMenu(menu: Menu): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseMenuUrl, menu);
  }

  updateMenu(menu: Menu): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseMenuUrl + menu.id, menu);
  }

  deleteMenu(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseMenuUrl + id);
  }

}
