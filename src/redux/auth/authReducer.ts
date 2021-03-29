import { AUTH_LOGIN, AUTH_LOGOUT } from "./authTypes";

const initialState = {
  isLoggedIn: false,
};

const auth = (state = initialState, action: UserAuthAction) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, ...{ isLoggedIn: true } };

    case AUTH_LOGOUT:
      return { ...state, ...{ isLoggedIn: false } };

    default:
      return state;
  }
};

export default auth;
