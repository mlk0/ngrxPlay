import { User } from "../../models/user";

//constants
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';


//action creators
export class LoadUsersAction {
    readonly type = LOAD_USERS;
    constructor() { }
}

export class LoadUsersSuccessAction {
    readonly type = LOAD_USERS_SUCCESS;
    constructor(public payload: User[]) {

    }
}


//add user constants
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';

//add user action creators
export class AddUserAction {
    readonly type = ADD_USER;
    constructor(public payload: User) { }
}
export class AddUserSuccessAction {
    readonly type = ADD_USER_SUCCESS;
    constructor(public payload: User) { }
}


//type
export type Action =
    LoadUsersAction | LoadUsersSuccessAction | 
    AddUserAction | AddUserSuccessAction;