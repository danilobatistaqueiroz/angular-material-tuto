import { Role } from "./role";

export class User {

    id: number;
    documento: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role[];
    token?: string;

}
