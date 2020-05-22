import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../context/github/githubContext";
import Repos from "../components/Repos";

const Profile = ({ match }) => {
  const { getRepos, getUser, user, repos, loading, error = {} } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // Пришлось отрубить esLint на этой строчке - хочет Dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p className="test-center">Loading...</p>;

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 text-center">
              <img src={avatar_url} alt={name} style={{ width: "250px" }} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Открыть профиль
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong> {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company: </strong> {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong> {blog}
                  </li>
                )}
              </ul>
              <div className="badge badge-primary mr-1">
                Подписчики: {followers}
              </div>
              <div className="badge badge-success mr-1">
                Подписан: {following}
              </div>
              <div className="badge badge-info mr-1">
                Репозитории: {public_repos}
              </div>
              <div className="badge badge-dark mr-1">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      {error.func === 'getRepos'? null: <Repos repos={repos}/>}
    </Fragment>
  );
};

export default Profile;
