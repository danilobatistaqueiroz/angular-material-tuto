import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { ApiService, AuthenticationService } from '../_services';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    @ViewChild('sidenav',{static: true}) sidenav: MatSidenav;
    events: string[] = [];
    opened: boolean = true;

    currentUser: User;
    userFromApi: User;

    constructor(
        private apiService: ApiService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        console.log(this.currentUser);
        console.log(this.currentUser.id);
    }

    ngOnInit() {
    	console.log('oninit');
        this.apiService.getUserById(this.currentUser.id).pipe(first()).subscribe(user => {
        	console.log(user);
            this.userFromApi = user.result;
        });
    }
}