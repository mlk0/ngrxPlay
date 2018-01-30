import { Customer } from "../../models/customer";

//constants
export const LOAD_CUSTOMERS = 'LOAD_CUSTOMERS';
export const LOAD_CUSTOMERS_SUCCESS = 'LOAD_CUSTOMERS_SUCCESS';

//action creators
export class LoadCustomersAction {  // this one is intended to be handled by the effect
    readonly type = LOAD_CUSTOMERS;
    constructor(){};
}

export class LoadCustomersSuccessAction { //this one is intended to be handled by the reducer
    readonly type = LOAD_CUSTOMERS_SUCCESS;
    constructor(public payload : Customer[]){
        
    }
}

//union type of all the action creators defined in the file
export type Action =
    LoadCustomersAction
    | LoadCustomersSuccessAction;