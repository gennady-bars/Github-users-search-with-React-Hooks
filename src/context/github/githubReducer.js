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
    error: {
      ...state.error,
      search: null,
    },
  }),
  [GET_REPOS]: (state, action) => ({
    ...state,
    repos: action.payload,
    loading: false,
    error: {
      ...state.error,
      getRepos: null,
    },
  }),
  [GET_USER]: (state, action) => ({
    ...state,
    user: action.payload,
    loading: false,
    error: {
      ...state.error,
      getUser: null,
    },
  }),
  [SET_LOADING]: (state) => ({ ...state, loading: true }),
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
