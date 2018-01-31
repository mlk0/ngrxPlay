import { Injectable, Inject } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import 'rxjs/add/observable/from';


@Injectable()
export class JsonPlaceholderService {

  readonly usersRoute : string = 'usersx';

  constructor(private http : Http, @Inject('JSON_PLACEHOLDER') private serviceUrl : string) { 

  }

  getUsers() : Observable<User[]>
  {

    
    let usersUrlParts = [
      this.serviceUrl,
      this.usersRoute
    ]

    let usersUrl = usersUrlParts.join('/');

    console.log(`usersUrl : ${usersUrl}`);


    

    let res = this.http.get(usersUrl)
    .map((r:Response) => {
      
      //I need to investigate the response-this is pretty much standard structure
      //but at this point it can be concluded that something is being received from the server
      console.log(`JsonPlaceholderService.getUsers - Response : ${JSON.stringify(r)}`);

      if(r.status == 200){

        let responseBody = r.json(); //get the actual body if present

        //let tst = responseBody[2];

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
          
          //return <User[]>{}
          return mappedItemsAsUsers;
        }


       

      }
      else{
        //some error happened
        let responseInCaseOfError : Observable<User[]> = Observable.from([]); //just make sure that there will always be some observable created of an empty list for the return
        return responseInCaseOfError;
      }
    })
    

    //return response;
    return res;

  }

}
