import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "./model/user.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeBackendService implements InMemoryDbService {
	createDb() {
	    let users = [
		      {
				    "userId": 5,
				    "firstName": "danilo",
				    "lastName": "batista",
				    "username": "danilo111"
			    },
			      {
				    "userId": 6,
				    "firstName": "queiroz",
				    "lastName": "batista",
				    "username": "queiroz000"
			    },
			      {
				    "userId": 1,
				    "firstName": "Alex",
				    "lastName": "Knr",
				    "username": "alex123"
			    },
			      {
				    "userId": 2,
				    "firstName": "danilo",
				    "lastName": "queiroz",
				    "username": "danilo123"
			    },
			      {
				    "userId": 7,
				    "firstName": "queiroz",
				    "lastName": "queiroz",
				    "username": "queiroz321"
			    }
		    ];
		    let menus = [
		        {
		          "menuId": 2,
		          "menuName": "Changes",
		          "position": "2",
		          "items": [],
		        }
		    ];
  		return {users, menus};
    }

    genId(users: User[]): number {
        return users.length > 0 ? Math.max(...users.map(user => user.userId)) + 1 : 11;
    }

}