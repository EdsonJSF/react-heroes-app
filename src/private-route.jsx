import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./auth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);

  return authState.logged ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.any.isRequired,
};
