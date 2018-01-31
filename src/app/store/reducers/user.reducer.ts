import * as userActions from "../actions/user.actions";
import { User } from "../../models/user";
import { Action } from "@ngrx/store";
 

export function userReducer(
    state : User[] = [{name : 'default user', username : 'defaultUsr', id: 1234, email : 'some.default@bla.com'}], 
    action : userActions.Action) : User[]
{
    switch(action.type){
        case userActions.LOAD_USERS_SUCCESS:{
            return action.payload;
        }
        default : 
        {
            return state;
        }
    }
}