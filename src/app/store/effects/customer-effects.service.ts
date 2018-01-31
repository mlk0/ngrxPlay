import { Injectable } from '@angular/core';
import { CustomerService } from '../../services/customer-service.service';
import { Actions, Effect } from "@ngrx/effects";
 
import * as customerActions from "../../store/actions/customer.actions";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
 import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/Observable';
 

@Injectable()
export class CustomerEffectsService {

  constructor(private customerService : CustomerService, 
              private action$ : Actions) { }



  // @Effect() loadCustomers2 = this.action$.ofType(customerActions.LOAD_CUSTOMERS) //this returns Actions<Action> which is the same as Observable<Action>
  // .switchMap(
  //   //() is meant for transfering the arguments - each individual observable in the previous stream
  //   () =>  ( Observable.from(this.customerService.getCustomers())  )
  // ) //this will need to perform a conversion from one type of an observable to another type of an observable so from Actions<Action> to Observable<Customer[]>


  @Effect() loadCustomers = 
    this.action$.ofType(customerActions.LOAD_CUSTOMERS)
  //   .switchMap((a)=>
  //   {
  //     return Observable.from(this.customerService.getCustomers())
  //   }
  // )
 // .map(c=>c);



    // .switchMap(() => 
    // {
    //   let retrievedCustomers = this.customerService.getCustomers();
    //   return new customerActions.LoadCustomersSuccessAction(retrievedCustomers);
    // })
    //this.customerService.getCustomers()) //this should suppose to return Observable<Customer[]> ?
    //.map(listOfCustomers => new customerActions.LoadCustomersSuccessAction(listOfCustomers));

    // .switchMap(
    //   () => Observable.from(this.customerService.getCustomers())
    //   .map(c=>c) 
         
      
    // )
.do(c=> console.log(c))
    .map(()=>  

      
       (new customerActions.LoadCustomersSuccessAction(this.customerService.getCustomers()))

    
    
  )

}
