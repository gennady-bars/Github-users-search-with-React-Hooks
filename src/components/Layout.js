import React, { Fragment } from "react";
import Navbar from "./NavBar";
import Alert from "./Alert";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container pt-4">
        <Alert />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile/:name" component={Profile} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default Layout;
