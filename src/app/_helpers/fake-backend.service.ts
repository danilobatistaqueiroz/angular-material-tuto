import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "../_models/user";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeBackendService implements InMemoryDbService {
	createDb() {
	    let users = [
		      {
				    "id": 5,
				    "firstName": "danilo",
				    "lastName": "batista",
				    "username": "danilo111"
			    },
			      {
				    "id": 6,
				    "firstName": "queiroz",
				    "lastName": "batista",
				    "username": "queiroz000"
			    },
			      {
				    "id": 1,
				    "firstName": "Alex",
				    "lastName": "Knr",
				    "username": "alex123"
			    },
			      {
				    "id": 2,
				    "firstName": "danilo",
				    "lastName": "queiroz",
				    "username": "danilo123"
			    },
			      {
				    "id": 7,
				    "firstName": "queiroz",
				    "lastName": "queiroz",
				    "username": "queiroz321"
			    }
		    ];
		    let menus = [
		        {
		          "id": 2,
		          "menuName": "Changes",
		          "position": "2",
		          "items": [],
		        }
		    ];
  		return {users, menus};
    }

    genId(users: User[]): number {
        return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
    }

}