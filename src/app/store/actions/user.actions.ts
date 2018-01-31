import { User } from "../../models/user";

//constants
export const LOAD_USERS  = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS  = 'LOAD_USERS_SUCCESS';



//action creators
export class LoadUsersAction {
    readonly type = LOAD_USERS;
    constructor(){}
}

export class LoadUsersSuccessAction {
    readonly type = LOAD_USERS_SUCCESS;
    constructor(public payload : User[]){
        
    }
}

//type
export type Action =
    LoadUsersAction | LoadUsersSuccessAction;