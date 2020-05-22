import React, { useContext } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { GithubContext } from "../context/github/githubContext";
import Loader from "../components/Loader";

const Home = () => {
  const { loading, users, error } = useContext(GithubContext);

  return (
    <React.Fragment>
      <Search />

      <div className="row">
        {loading ? (
          <Loader />
        ) : error.search ? (
          <h1>Couldn't get Github users. Try again.</h1>
        ) : !users.length ? (
          <div className="col">
            <h2>
              Введите запрос для поиска или повторите, если ничего не найдено
            </h2>
            <img src="./images/git-disco.gif" alt="" className="img-fluid mx-auto d-block"/>
          </div>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="col-sm-4 mb-4">
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
