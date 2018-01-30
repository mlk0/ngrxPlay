import * as customerActions from "../actions/customer.actions";
import { Customer } from "../../models/customer";

export function customerReducer(state : Customer[] = [], action : customerActions.Action ){
    switch(action.type){
        case customerActions.LOAD_CUSTOMERS_SUCCESS : {
                console.log('in the customer reducer for LOAD_CUSTOMERS_SUCCESS');
                console.log(`the action was : ${action}`);
                console.log(action);
            return action.payload;
        }
        default:
        {
            return state;
        }
    }
}