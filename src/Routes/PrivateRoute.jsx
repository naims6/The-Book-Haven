import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContex";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;
