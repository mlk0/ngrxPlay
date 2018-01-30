import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerServiceService } from './services/customer-service.service';

import { StoreModule } from "@ngrx/store";
import { customerReducer } from './store/reducers/customer.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({customer : customerReducer})
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
