import { authReducer } from "../store/reducers/auth.reducer";
import { AuthEffects } from "./effects/auth.effects";

export const appReducer = {
  auth: authReducer,
};

export const appEffects = [
  AuthEffects,
];