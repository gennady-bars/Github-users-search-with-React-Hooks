import React, { useReducer } from "react";
import axios from "axios";

import { GithubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING,
  SET_ERROR,
} from "../types";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const ID_SECRET = `client_id=${CLIENT_ID}&client_secret${CLIENT_SECRET}`;

const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false,
    error: {
      search: null,
      getUser: null,
      getRepos: null
    },
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async (value) => {
    setLoading();

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${value}&${ID_SECRET}`
      );

      dispatch({
        type: SEARCH_USERS,
        payload: response.data.items,
      });
    } catch (error) {
      setError(error, 'search');
    }
  };

  const getUser = async (name) => {
    setLoading();

    try {
      const response = await axios.get(
        `https://api.github.com/users/${name}?${ID_SECRET}`
      );

      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      setError(error, 'getUser');
    }
  };

  const getRepos = async (name) => {
    setLoading();

    try {
      const response = await axios.get(
        `https://api.github.com/users/${name}/repos?${ID_SECRET}`
      );

      dispatch({
        type: GET_REPOS,
        payload: response.data,
      });
    } catch (error) {
      setError(error, 'getRepos');
    }
  };

  const { user, users, repos, loading, error } = state;

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setError = (error, func) => dispatch({ type: SET_ERROR, error: {[func]: error} });

  return (
    <GithubContext.Provider
      value={{
        setLoading,
        getRepos,
        getUser,
        search,
        clearUsers,
        setError,
        user,
        users,
        repos,
        loading,
        error,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;
