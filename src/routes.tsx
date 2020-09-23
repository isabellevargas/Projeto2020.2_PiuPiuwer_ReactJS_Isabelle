import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

import { history } from "./history";

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
