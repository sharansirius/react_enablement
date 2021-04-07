/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({
  authenticationPath,
  ...routeProps
}: PrivateRouteProps) {
  const userAuth = useSelector((state: CineStore) => state.auth);
  return userAuth.isLoggedIn ? (
    <Route {...routeProps} />
  ) : (
    <Redirect to={{ pathname: authenticationPath }} />
  );
}

export default PrivateRoute;
