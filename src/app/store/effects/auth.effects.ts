import { HttpService } from "../../services/http.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginFailure, loginRequest, loginSuccess } from "../actions/auth.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ILoginSuccessResponse, IUser } from "../../models/IUser";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthEffects {
  private readonly loginUrl: string = 'http://localhost:5000/auth/login';

  constructor(
    private readonly actions$: Actions,
    private readonly httpService: HttpService,
  ) { }

  login$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loginRequest),
      switchMap(({ email, password }) => 
        this.httpService.post<ILoginSuccessResponse>(this.loginUrl, { email, password }).pipe(
          map(response => loginSuccess({ user: response?.user })),
          catchError(error => of(loginFailure({ error }))),
        )
      ),
    )
  );
}