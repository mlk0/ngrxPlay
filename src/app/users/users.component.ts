import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private jsonService : JsonPlaceholderService) { 
    
  }

  users : User[] = [{name : 'tst', username : 'tstun', id: 1, email : 'bla@bla.com'}];
  ngOnInit() {
    console.log("UsersComponent.ngOnInit");
    this.jsonService.getUsers().subscribe(
      data=>this.users = data, 
      error=>console.log(`error when calling getUsers: ${error}`));
  }

}
