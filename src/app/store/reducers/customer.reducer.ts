import * as customerActions from "../actions/customer.actions";
import { Customer } from "../../models/customer";

export function customerReducer(state : Customer[], action : customerActions.Action ){
    switch(action.type){
        case customerActions.LOAD_CUSTOMERS_SUCCESS : {
            return action.payload;
        }
        default:
        {
            return state;
        }
    }
}