import * as ActionTypes from "./ActionTypes";

export const Comments = (
  state = {
    comments: [],
    isLoading: false,
    errMess: null,
    deleteSuccess: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isLoading: false,
        errMess: null,
        deleteSuccess: false,
      };

    case ActionTypes.COMMENT_LOADING:
      return { ...state, isLoading: true, errMess: null, deleteSuccess: false };

    case ActionTypes.COMMENT_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.POST_COMMENT:
      const comment = action.payload;
      return {
        ...state,
        isLoading: false,
        comments: state.comments.concat(comment),
      };

    case ActionTypes.DELETE_COMMENT:
      return {
        ...state,
        deleteSuccess: true,
        isLoading: false,
        // comments: array,
      };

    default:
      return state;
  }
};
