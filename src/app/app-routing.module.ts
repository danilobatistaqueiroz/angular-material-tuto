import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { HeadSideBarComponent } from './head-side-bar/head-side-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {AddMenuComponent} from "./menu/add-menu/add-menu.component";
import {ListMenuComponent} from "./menu/list-menu/list-menu.component";
import {EditMenuComponent} from "./menu/edit-menu/edit-menu.component";
//import {CustomMenuComponent} from "./custom-menu/custom-menu.component";

import { AuthGuard } from './_guards';
import { Role } from './_models';

const routes: Routes = [
  {path : '', component : LoginPageComponent},
  {path : 'side', component : SideNavBarComponent },
  {path : 'head', component : HeadSideBarComponent },
  {path : 'login', component: LoginPageComponent},
  {path : 'home', component: HomePageComponent},

  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'list-user', component: ListUserComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'add-menu', component: AddMenuComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] }},
  { path: 'list-menu', component: ListMenuComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'edit-menu', component: EditMenuComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  //{ path: 'custom-menu', component: CustomMenuComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
