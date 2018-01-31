import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // constructor(private jsonService : JsonPlaceholderService) { 
    
  // }

  constructor(private store : Store<AppState>){
    this.store.select(state=>state.users).subscribe(
      data=>this.users = data
    );
  }

  users : User[] = [];//[{name : 'tst', username : 'tstun', id: 1, email : 'bla@bla.com'}];
  ngOnInit() {
    console.log("UsersComponent.ngOnInit");
    // this.jsonService.getUsers().subscribe(
    //   data=>this.users = data, 
    //   error=>console.log(`error when calling getUsers: ${error}`));
  }

}
