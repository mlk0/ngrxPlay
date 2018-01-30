import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../services/customer-service.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private customerService : CustomerServiceService) { }

  customers : Customer[];
  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

  deleteCustomer(id : number){
    console.log(`customerId : ${id}`);
    var id = this.customerService.deleteCustomer(id);
    this.customers = this.customerService.getCustomers();
  }

}
