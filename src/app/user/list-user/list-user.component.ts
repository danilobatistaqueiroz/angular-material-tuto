import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../model/user.model";
import {ApiService} from "../../core/api.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    console.log('onInit');
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    console.log('getUsers');
    this.apiService.getUsers()
      .subscribe( data => {
          console.log('data:'); console.log(data[0]);
          this.users = data;
      });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.userId)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    console.log(user.userId);
    window.localStorage.setItem("editUserId", user.userId.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    console.log('addUser');
    this.router.navigate(['add-user']);
  };
}
