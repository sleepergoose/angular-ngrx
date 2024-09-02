import { createAction, props } from '@ngrx/store';
import { ILogin, IUser } from '../models/models';

export const loginRequestAction = createAction(
  '[Auth] login request action',
  props<{ payload: ILogin }>()
);

export const loginResponseAction = createAction(
  '[Auth] login response action',
  props<{ payload: IUser }>()
);

export const logincErrorAction = createAction(
  '[Auth] login error action',
  props<{ error: string }>()
);

export const clearState = createAction('CLEAR_STATE');

export const logOut = createAction('LOG_OUT');