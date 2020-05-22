import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
  SET_ERROR,
} from "../types";

const handlers = {
  [SEARCH_USERS]: (state, action) => ({
    ...state,
    users: action.payload,
    loading: false,
  }),
  [GET_REPOS]: (state, action) => ({
    ...state,
    repos: action.payload,
    loading: false,
  }),
  [GET_USER]: (state, action) => ({
    ...state,
    user: action.payload,
    loading: false,
  }),
  [SET_LOADING]: (state) => ({ ...state, loading: true, error: {} }),
  [CLEAR_USERS]: (state) => ({ ...state, users: [] }),
  [SET_ERROR]: (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
  }),
  DEFAULT: (state) => state,
};

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
