import * as ActionTypes from "./ActionTypes";

export const Favourites = (
  state = {
    favourites: {},
    isLoading: false,
    deleteSuccess: false,
    errMess: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FAVOURITE_LOADING:
      return { ...state, isLoading: true, deleteSuccess: false, errMess: null };

    case ActionTypes.GET_FAVOURITES:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: false,
        errMess: null,
        favourites: action.payload,
      };

    case ActionTypes.ADD_FAVOURITE:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: false,
        errMess: null,
        // favourites: state.favourites.concat(action.payload),
        favourites: action.payload,
      };

    case ActionTypes.DELETE_FAVOURITE:
      return { ...state, deleteSuccess: true, isLoading: false };

    default:
      return state;
  }
};
