import { Customer } from "./customer";
 
import { User } from "./user";

export interface AppState {
    customers: Customer[]
    users : User[];
}
