import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidenav-toggle',
  templateUrl: './sidenav-toggle.component.html',
  styleUrls: ['./sidenav-toggle.component.css']
})
export class SidenavToggleComponent {
  @ViewChild('sidenav',{static: true}) sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean = true;
}