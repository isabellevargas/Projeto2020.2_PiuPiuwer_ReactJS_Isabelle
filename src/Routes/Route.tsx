import React from "react";
import {
  Route as ReactRouter,
  RouteProps as ReactRouteProps,
  Redirect,
} from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import Feed from "../pages/Feed";

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Feed,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <ReactRouter
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Feed />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/login" : "/feed",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
