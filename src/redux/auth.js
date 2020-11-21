import * as ActionTypes from "./ActionTypes";

export const Auth = (
  state = {
    loginSuccess: false,
    registerSuccess: false,
    isAuthenticated: localStorage.getItem("user") ? true : false,
    errMess: null,
    user: localStorage.getItem("user") ? localStorage.getItem("user") : "",
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      // localStorage.setItem('user', User.username)
      return {
        ...state,
        loginSuccess: action.payload,
        isAuthenticated: true,
        user: localStorage.getItem("user"),
      };

    case ActionTypes.LOGIN_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.LOGOUT:
      return { ...state, isAuthenticated: false };

    case ActionTypes.REGISTER_SUCCESS:
      return { ...state, registerSuccess: action.payload };

    case ActionTypes.REGISTER_FAILED:
      return { ...state, errMess: action.payload };
    default:
      return state;
  }
};
