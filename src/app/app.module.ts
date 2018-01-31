import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './services/customer-service.service';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { customerReducer } from './store/reducers/customer.reducer';

import { CustomerEffectsService } from './store/effects/customer-effects.service';
import { HttpModule } from "@angular/http";
import { Urls } from './constants';
import { UsersComponent } from './users/users.component';
import { JsonPlaceholderService } from './services/json-placeholder.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    //it is important that the key associated with the reducer needs to be identical to the state slice in AppState
    //and this needs to match the store.select statement
    StoreModule.forRoot({ customers: customerReducer })
    , EffectsModule.forRoot([CustomerEffectsService])

    , HttpModule
  ],
  providers: [
    CustomerService,JsonPlaceholderService
    , { provide: 'JSON_PLACEHOLDER', useValue: Urls.jsonPlaceholderBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
