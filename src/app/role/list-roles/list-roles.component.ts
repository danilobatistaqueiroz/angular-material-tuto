import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Role} from "../../model/role.model";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  roles: Role[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getRoles()
      .subscribe( data => {
          this.roles = data.result;
      });
  }

  deleteRole(role: Role): void {
    this.apiService.deleteRole(role.roleId)
      .subscribe( data => {
        this.roles = this.roles.filter(r => r !== role);
      })
  };

  editRole(role: Role): void {
    window.localStorage.removeItem("editRoleId");
    console.log(role.roleId);
    window.localStorage.setItem("editRoleId", role.roleId.toString());
    this.router.navigate(['edit-role']);
  };

  addRole(): void {
    this.router.navigate(['add-role']);
  };
}
