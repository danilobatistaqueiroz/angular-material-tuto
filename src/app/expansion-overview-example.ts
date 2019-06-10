import {Component, OnInit} from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample implements OnInit {
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