import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {FlexLayoutModule} from '@angular/flex-layout';

import { ExpansionOverviewExample } from './expansion-overview-example';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { HeadSideBarComponent } from './head-side-bar/head-side-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';

import {NgxMaskModule} from 'ngx-mask';

import {MatIconRegistry} from '@angular/material/icon';
import { SidenavToggleComponent } from './sidenav-toggle/sidenav-toggle.component';

import {TokenInterceptor} from "./core/interceptor";
import {ApiService} from "./core/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { FakeBackendService } from "./fake-backend.service";

//export const options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    AppComponent,
    ExpansionOverviewExample,
    SideNavBarComponent,
    HeadSideBarComponent,
    LoginPageComponent,
    SidenavToggleComponent
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