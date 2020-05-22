import React, { Fragment } from "react";
import Profile from "./Profile";

const About = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Information about me</h1>
          <p className="lead">Check out my Github account</p>
        </div>
      </div>

      <Profile defaultName='gennady-bars'/>
    </Fragment>
  );
};

export default About;
