import {Component, OnInit} from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  panelOpenState = false;
  menus: Menu[] = [];
  ngOnInit() {
  	this.menus.push(new Menu());
  	this.menus[0].titulo = "Pertences";
  	this.menus[0].objetos = ["A","B","C"];
  	this.menus.push(new Menu());
  	this.menus[1].titulo = "Recebiveis";
  	this.menus[1].objetos = ["X","Y","Z"];
  }
}

class Menu {
	titulo: string;
	objetos: string[];
}