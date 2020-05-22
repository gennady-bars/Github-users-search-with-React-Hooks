import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../context/github/githubContext";
import Repos from "../components/Repos";
import UserInfo from "../components/UserInfo";
import Loader from "../components/Loader";

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

  if (loading) return <Loader />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>

      <UserInfo user={user} error={error.getUser} />

      <Repos repos={repos} error={error.getRepos} />
    </Fragment>
  );
};

export default Profile;
