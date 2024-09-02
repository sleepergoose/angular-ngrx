import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as AuthActions from '../actions/user.actions';
import { catchError, delay, map, mergeMap, of } from 'rxjs';
import { IUser } from '../../models/user.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
  ) { }

  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      delay(2000),
      ofType(AuthActions.loginRequestAction),
      mergeMap(() => of({ email: 'Cool Email', name: 'Big Name' } as IUser).pipe(
        map((user) => AuthActions.loginResponseAction({ payload: user })),
        catchError(error => of(AuthActions.logincErrorAction(error)))
      ))
    ));
}
