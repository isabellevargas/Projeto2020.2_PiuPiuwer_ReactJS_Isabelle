import React from "react";
import { Switch } from "react-router-dom";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Redirection from "./redirect";
import Route from "./Route";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/feed" component={Feed} isPrivate />
      <Route component={Redirection} />
    </Switch>
  );
};

export default Routes;
