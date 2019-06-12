import { Role } from "./role.model";

export class User {

    userId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role[];
    token?: string;

}
