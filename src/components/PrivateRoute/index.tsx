import React from "react";
import Feed from "../../pages/Feed";

import { Route, Redirect } from "react-router";

const PrivateRoute = () => {
  const isLogged = !!localStorage.getItem("token");
  return isLogged ? (
    <Route path="/feed" component={Feed} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
