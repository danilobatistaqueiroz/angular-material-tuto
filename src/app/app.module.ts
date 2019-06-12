import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {FlexLayoutModule} from '@angular/flex-layout';

import {NgxMaskModule} from 'ngx-mask';

import {MatIconRegistry} from '@angular/material/icon';
import { SidenavToggleComponent } from './sidenav-toggle/sidenav-toggle.component';


import {TokenInterceptor} from "./core/interceptor";
import {ApiService} from "./core/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { FakeBackendService } from "./fake-backend.service";



import { ExpansionOverviewExample } from './expansion-overview-example';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { HeadSideBarComponent } from './head-side-bar/head-side-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ListRolesComponent } from './role/list-roles/list-roles.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { EditMenuComponent } from './menu/edit-menu/edit-menu.component';
import { ListMenuComponent } from './menu/list-menu/list-menu.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
//import { CustomMenuComponent } from './custom-menu/custom-menu.component';



//export const options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    AppComponent,
    ExpansionOverviewExample,
    SideNavBarComponent,
    HeadSideBarComponent,
    LoginPageComponent,
    SidenavToggleComponent,

    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    ListRolesComponent,
    AddRoleComponent,
    EditRoleComponent,
    EditMenuComponent,
    ListMenuComponent,
    AddMenuComponent,
    //CustomMenuComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService)
    //InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
