import { createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/auth.reducer";

export const selectAuthState = (state: any) => state.auth;

export const selectAuthUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user,
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error,
);