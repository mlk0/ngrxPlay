import { Injectable } from '@angular/core';
import { CustomerService } from '../../services/customer-service.service';
import { Actions, Effect } from "@ngrx/effects";
 
import * as customerActions from "../../store/actions/customer.actions";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
 

@Injectable()
export class CustomerEffectsService {

  constructor(private customerService : CustomerService, 
              private action$ : Actions) { }


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
