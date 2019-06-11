import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Role} from "../model/role.model";
import {Menu} from "../model/menu.model";
import {Observable, of} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

class Login {
  documento: string;
  password: string
}

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  //baseUrl: string = 'http://localhost:8080/';
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

  getUserById(userId: number): Observable<ApiResponse> {
    console.log('getUserById'); console.log(userId);
    return this.http.get<ApiResponse>(this.baseUserUrl + userId);
  }

  createUser(user: User): Observable<ApiResponse> {
    console.log(user);
    return this.http.post<ApiResponse>(this.baseUserUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    console.log(user.userId);
    return this.http.put<ApiResponse>(this.baseUserUrl + user.userId, user);
  }

  deleteUser(userId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUserUrl + userId);
  }

  getRoles() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseRoleUrl);
  }

  getRoleById(roleId: number): Observable<ApiResponse> {
    console.log('getRoleById'); console.log(roleId);
    return this.http.get<ApiResponse>(this.baseRoleUrl + roleId);
  }

  createRole(role: Role): Observable<ApiResponse> {
    console.log(role);
    return this.http.post<ApiResponse>(this.baseRoleUrl, role);
  }

  updateRole(role: Role): Observable<ApiResponse> {
    console.log(role.roleId);
    return this.http.put<ApiResponse>(this.baseRoleUrl + role.roleId, role);
  }

  deleteRole(roleId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseRoleUrl + roleId);
  }

  getMenus() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseMenuUrl);
  }

  getMenuById(menuId: number): Observable<ApiResponse> {
    console.log('getMenuById'); console.log(menuId);
    return this.http.get<ApiResponse>(this.baseMenuUrl + menuId);
  }

  createMenu(menu: Menu): Observable<ApiResponse> {
    console.log(menu);
    return this.http.post<ApiResponse>(this.baseMenuUrl, menu);
  }

  updateMenu(menu: Menu): Observable<ApiResponse> {
    console.log(menu.menuId);
    return this.http.put<ApiResponse>(this.baseMenuUrl + menu.menuId, menu);
  }

  deleteMenu(menuId: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseMenuUrl + menuId);
  }

}
