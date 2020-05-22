import React, { useContext } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { GithubContext } from "../context/github/githubContext";

const Home = (props) => {
  const { loading, users } = useContext(GithubContext);

  return (
    <React.Fragment>
      <Search />

      <div className="row">
        {loading ? (
          <p className="test-center">Loading...</p>
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
