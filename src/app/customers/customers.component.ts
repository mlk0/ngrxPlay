import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer-service.service';
import { Customer } from '../models/customer';
import { Store } from '@ngrx/store';
import * as customerActions from '../store/actions/customer.actions';
import { AppState } from '../models/app-state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(
    //private customerService : CustomerServiceService  - this was removed since it is no longer dependent on the service directly
    private store : Store<AppState>
  ) { 

    //store.select returns Store<T> but this is also asignable to an Observable<T>
    //since Store extends Observable
   

       // console.log(`customers.length = ${this.customers.length}`)

      // this.cust$ = this.store.select(c=>c.customers)


    //  this.store.select(state=>
    //   {console.log(`state : ${state.customers}`);
    // return  state.customers;}
    //  ).subscribe(c=>this.customers = c);

    // this.cust$ = this.store.select(state=>state.customers);
    // this.cust$.subscribe(i=> this.customers=i)

   // this.cust$ = this.store.select(state=>state.customers);


   //this.store.select(s=>s.customers)
  

    this.store.select(state=>state.customers).subscribe(i=>this.customers=i)


  }



  customers : Customer[];
   cust$ : Observable<any>;
   cc : Store<Customer[]>;

  ngOnInit() {


     //this.store.select(state=>this.customers =state.customers)

    // this.cc.select(c=>c)
    // this.cc.map(c=>c)
    // this.cc.subscribe(a=>{
    //    console.log('some results came on Init');
    //    console.log(a);
    // })
    // this.store.select(store=>store.customers)
    // .subscribe(c=>{
      
    //   console.log('in store.select subscribe')
    //   console.log(c)
    //   this.customers=c});

    //this.customers = this.customerService.getCustomers();
    //this.store.dispatch(new customerActions.LoadCustomersAction());
    console.log('onInit')
    this.getCusomers();
  }

  getCusomers(){
    console.log('in getCustomers')
    this.store.dispatch(new customerActions.LoadCustomersAction());
  }

  deleteCustomer(id : number){
    console.log(`customerId : ${id}`);
    // var id = this.customerService.deleteCustomer(id);
    // this.customers = this.customerService.getCustomers();
  }

}
