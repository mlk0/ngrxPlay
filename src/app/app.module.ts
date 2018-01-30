import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './services/customer-service.service';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { customerReducer } from './store/reducers/customer.reducer';

import { CustomerEffectsService } from './store/effects/customer-effects.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    //it is important that the key associated with the reducer needs to be identical to the state slice in AppState
    //and this needs to match the store.select statement
    StoreModule.forRoot({customers : customerReducer})
    ,EffectsModule.forRoot([CustomerEffectsService])
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
