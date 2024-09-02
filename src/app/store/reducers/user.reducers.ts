import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/user.actions';

export interface IUserStore {
  email: string,
  name: string,
  error: string | null,
};

const initialState: IUserStore = {
  email: '',
  name: '',
  error: null,
};

export const appReducer = createReducer(
  initialState,
  on(AuthActions.loginResponseAction, (state, action) => {
    return {
      ...state,
      email: action.payload.email,
      name: action.payload.name,
    } as IUserStore;
  }),
  on(AuthActions.logincErrorAction, (state, action) => {
    return {
      ...state,
      email: '',
      name: '',
      error: action.error,
    } as IUserStore;
  }),
);