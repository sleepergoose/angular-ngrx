import { Action, createReducer, on } from "@ngrx/store";
import { IUser } from "../../models/IUser";
import { loginFailure, loginSuccess } from "../actions/auth.actions";
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

const getStoresAuthState = () => {
  try {
    const auth = localStorage.getItem('auth');
    return auth ? JSON.parse(auth) : authInitialState;
  } catch {
    return authInitialState;
  }
};

const _authReducer = createReducer(
  getStoresAuthState(),
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

