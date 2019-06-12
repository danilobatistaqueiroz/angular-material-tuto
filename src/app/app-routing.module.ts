import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpansionOverviewExample } from './expansion-overview-example';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { HeadSideBarComponent } from './head-side-bar/head-side-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SidenavToggleComponent } from './sidenav-toggle/sidenav-toggle.component';

import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {AddRoleComponent} from "./role/add-role/add-role.component";
import {ListRolesComponent} from "./role/list-roles/list-roles.component";
import {EditRoleComponent} from "./role/edit-role/edit-role.component";
import {AddMenuComponent} from "./menu/add-menu/add-menu.component";
import {ListMenuComponent} from "./menu/list-menu/list-menu.component";
import {EditMenuComponent} from "./menu/edit-menu/edit-menu.component";
//import {CustomMenuComponent} from "./custom-menu/custom-menu.component";

const routes: Routes = [
  {path : '', component : LoginPageComponent},
  {path : 'side', component : SideNavBarComponent },
  {path : 'head', component : HeadSideBarComponent },
  {path : 'login', component: LoginPageComponent},
  {path : 'toggle', component: SidenavToggleComponent},

  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-role', component: AddRoleComponent },
  { path: 'list-roles', component: ListRolesComponent },
  { path: 'edit-role', component: EditRoleComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'list-menu', component: ListMenuComponent },
  { path: 'edit-menu', component: EditMenuComponent },
  //{ path: 'custom-menu', component: CustomMenuComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
