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

import {NgxMaskModule} from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    ExpansionOverviewExample,
    SideNavBarComponent,
    HeadSideBarComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
