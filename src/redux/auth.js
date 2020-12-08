import * as ActionTypes from "./ActionTypes";

export const Auth = (
  state = {
    loginSuccess: false,
    registerSuccess: false,

    errMess: null,
    user: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      // localStorage.setItem('user', User.username)
      return {
        ...state,
        loginSuccess: true,
        isAuthenticated: true,
        user: action.payload,
        errMess: null,
      };

    case ActionTypes.LOGIN_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loginSuccess: false,
        errMess: false,
      };

    case ActionTypes.REGISTER_SUCCESS:
      return { ...state, registerSuccess: action.payload, errMess: null };

    case ActionTypes.REGISTER_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
        loginSuccess: false,
        errMess: null,
      };

    default:
      return state;
  }
};
