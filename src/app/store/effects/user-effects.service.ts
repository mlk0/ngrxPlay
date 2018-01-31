import { Injectable } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { Actions, Effect } from "@ngrx/effects";
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffectsService {

  constructor(private service: JsonPlaceholderService,
    private actions$: Actions) { }

  @Effect() userLoad = this.actions$.ofType(userActions.LOAD_USERS)
    .switchMap(
      (action) => (
        this.service.getUsers()
          .map((users) => {
            return new userActions.LoadUsersSuccessAction(users);
          })
      )
    )

  
  @Effect() addUser = this.actions$.ofType(userActions.ADD_USER)
  .switchMap(
    (action) => (
      this.service.addUser( (<userActions.AddUserAction>action).payload)
      .map((addedUser)=> {  return new userActions.AddUserSuccessAction(addedUser)})

  )

  )
}
