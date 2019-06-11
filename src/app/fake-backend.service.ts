import { InMemoryDbService } from "angular-in-memory-web-api";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeBackendService implements InMemoryDbService {
	createDb() {
	    let auth = [
		    {
		      status: 200,
		      message: "success",
		      result: {
		        token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4MTIzIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vZGV2Z2xhbi5jb20iLCJpYXQiOjE1NjAyODM5MzMsImV4cCI6MTU2MDMwMTkzM30.dIw3SdyqjfFPjbg1G_CJytZJRjpVaycdcExc2bx1gHk",
		        username: "alex123"
		      }
		    }
	    ];
	    let users = [
		      {
				    "userId": 5,
				    "firstName": "danilo",
				    "lastName": "batista",
				    "username": "danilo111",
				    "salary": 111,
				    "age": 1
			    },
			      {
				    "userId": 6,
				    "firstName": "queiroz",
				    "lastName": "batista",
				    "username": "queiroz000",
				    "salary": 2211,
				    "age": 21
			    },
			      {
				    "userId": 1,
				    "firstName": "Alex",
				    "lastName": "Knr",
				    "username": "alex123",
				    "salary": 3456,
				    "age": 332
			    },
			      {
				    "userId": 2,
				    "firstName": "danilo",
				    "lastName": "queiroz",
				    "username": "danilo123",
				    "salary": 1112,
				    "age": 11
			    },
			      {
				    "userId": 7,
				    "firstName": "queiroz",
				    "lastName": "queiroz",
				    "username": "queiroz321",
				    "salary": 33,
				    "age": 33
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
  		return {users};
    }
}