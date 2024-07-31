import { createAction, props } from "@ngrx/store";
import { ILogin } from "../../models/ILogin";
import { IUser } from "../../models/IUser";

export const loginRequest = createAction(
  '[Auth] Login',
  props<ILogin>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: IUser }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: Error }>()
);