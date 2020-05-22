import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../context/github/githubContext";
import Repos from "../components/Repos";
import UserInfo from "../components/UserInfo";

const Profile = ({ match }) => {
  const { getRepos, getUser, user, repos, loading, error } = useContext(
    GithubContext
  );
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // Пришлось отрубить esLint на этой строчке - хочет Dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p className="test-center">Loading...</p>;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>

      {error.getUser ? (
        <h1>Couldn't get info about {user.login}</h1>
      ) : (
        <UserInfo user={user} />
      )}

      {error.getRepos ? (
        <h1>Couldn't get Repos of {user.login}</h1>
      ) : (
        <Repos repos={repos} />
      )}
    </Fragment>
  );
};

export default Profile;
