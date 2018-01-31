import { Injectable, Inject } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import 'rxjs/add/observable/from';
//import 'rxjs/add/observable/just';
///import 'rxjs/add/operator/just';
//import 'rxjs/add/operator/return';
//import 'rxjs/add/operator/Return'
//import * as Rx from 'rxjs/rx';
import 'rxjs/add/observable/of';

@Injectable()
export class JsonPlaceholderService {

  readonly usersRoute : string = 'users';

  constructor(private http : Http, @Inject('JSON_PLACEHOLDER') private serviceUrl : string) { 
  }

  addUser(user : User) :  Observable<User> {
    //let response = new Observable<User>()

    let newUserId = Math.round(Math.random() * 100);

    let someNewUser = <User>{ id:newUserId,name:user.name,username:user.username, email:user.email}
    
    console.log(`JsonPlaceholderService.addUser - someNewUser : ${JSON.stringify(someNewUser)}`);

    //http.post should return Observable<User>, I am just mocking this behaviour
    let someNewUserObservable = Observable.of(someNewUser);

    return someNewUserObservable;
  }

  getUsers() : Observable<User[]>
  {
   let usersUrlParts = [
      this.serviceUrl,
      this.usersRoute
    ]

    let usersUrl = usersUrlParts.join('/');

    console.log(`usersUrl : ${usersUrl}`);


    

    let response = this.http.get(usersUrl)
    .map((r:Response) => {
      
      //I need to investigate the response-this is pretty much standard structure
      //but at this point it can be concluded that something is being received from the server
      console.log(`JsonPlaceholderService.getUsers - Response : ${JSON.stringify(r)}`);

      if(r.status == 200){

        let responseBody = r.json(); //get the actual body if present
      

        if(responseBody){

          //this is to investigate the body structure in order to parse the
          //response better in the subsequent statements
          console.log(`JsonPlaceholderService.getUsers - responseBody : ${JSON.stringify(responseBody)}`);
          
          
          //since it was identified that the response is an array
          //the Array.map will be used to access each individual item
          //and convert it to the strongly typed instance of User
          //another good indication that this is an Array 
          //is the indicated _proto_ type of responseBoduy item
          let mappedItemsAsUsers = responseBody.map(item=>
            {
              console.log(`responseBody.item : ${JSON.stringify(item)}`);
              
              return <User>{
                id : item.id,
                name : item.name,
                username : item.username,
                email : item.email
              }})
          
          
          return mappedItemsAsUsers;
        }


       

      }
      else{
        //some error happened and the response code is other than 200
        let responseInCaseOfError : Observable<User[]> = Observable.from([]); //just make sure that there will always be some observable created of an empty list for the return
        return responseInCaseOfError;
      }
    })
    

    
    return response;

  }

}
