import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomersComponent } from '../customers/customers.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  constructor() {
  
   }

  allCustomers : Customer[] = [
    {
      id : 1, name : "John",  email : 'John@abc.com', dateOfBirth :  new Date('1970-10-10')  
    },
    {
      id : 2, name : "Jane",  email : 'Jane@abc.com', dateOfBirth :  new Date('1970-8-8')  
    },
    {
      id : 3, name : "Ted",  email : 'Ted@abc.com', dateOfBirth :  new Date('1975-11-10')  
    },
    {
      id : 4, name : "Jill",  email : 'Jill@abc.com', dateOfBirth :  new Date('1970-8-8')  
    }  
  ];

  getCustomers() : Customer[] 
  {
    console.log('in CustomerService.getCustomers()')
    return this.allCustomers;
  }

  // getCustomersO() : Observable<Customer[]> 
  // {
  //   console.log('in CustomerService.getCustomers()')
  //   return  Observable.from(this.allCustomers) ;
  // }


  deleteCustomer(customerId : number) : number {


    let modifiedListOfCustomers =
      this.allCustomers.filter(c=>c.id!==customerId);
    
    this.allCustomers = modifiedListOfCustomers;
    

    return customerId;
  }

}
