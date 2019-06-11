import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpansionOverviewExample } from './expansion-overview-example';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { HeadSideBarComponent } from './head-side-bar/head-side-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SidenavToggleComponent } from './sidenav-toggle/sidenav-toggle.component';

const routes: Routes = [
  {path : '', component : LoginPageComponent},
  {path : 'side', component : SideNavBarComponent },
  {path : 'head', component : HeadSideBarComponent },
  {path : 'login', component: LoginPageComponent},
  {path : 'toggle', component: SidenavToggleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
