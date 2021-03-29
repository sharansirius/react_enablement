import { AUTH_LOGIN, AUTH_LOGOUT } from "./authTypes";

export const logOut = (): UserAuthAction => ({ type: AUTH_LOGOUT });
export const logIn = (): UserAuthAction => ({ type: AUTH_LOGIN });
