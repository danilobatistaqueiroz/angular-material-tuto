import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Menu} from "../../_models/menu";
import {ApiService} from "../../_services/api.service";

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

  menus: Menu[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getMenus()
      .subscribe( data => {
          this.menus = data.result;
      });
  }

  deleteMenu(menu: Menu): void {
    this.apiService.deleteMenu(menu.id)
      .subscribe( data => {
        this.menus = this.menus.filter(u => u !== menu);
      })
  };

  editMenu(menu: Menu): void {
    window.localStorage.removeItem("editMenuId");
    window.localStorage.setItem("editMenuId", menu.id.toString());
    this.router.navigate(['edit-menu']);
  };

  addMenu(): void {
    this.router.navigate(['add-menu']);
  };
}
