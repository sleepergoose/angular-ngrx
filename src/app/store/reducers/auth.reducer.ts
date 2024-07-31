import { Action, createReducer, on } from "@ngrx/store";
import { IUser } from "../../models/IUser";
import { loginFailure, loginRequest, loginSuccess } from "../actions/auth.actions";

export interface AuthState {
  user: IUser | null,
  error: string | null,
  isLoggedIn: boolean,
}

const authInitialState: AuthState = {
  isLoggedIn: false,
  error: null,
  user: null,
};

const _authReducer = createReducer(
  authInitialState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoggedIn: true,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoggedIn: false,
    error: error?.message,
  })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}

