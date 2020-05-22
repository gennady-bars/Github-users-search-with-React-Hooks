import React from "react";
import { Fragment } from "react";

const Repos = ({ repos, error }) => {

  if (error) return <h1>Couldn't get Repos...</h1>
  
  return (
    <Fragment>
      {repos.map((repo) => {
        return (
          <div className="card mb-3" key={repo.id}>
            <div className="card-body">
              <h5>
                <a href={repo.html_url} rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h5>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Repos;
