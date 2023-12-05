import { useReducer } from "react";
import PropTypes from "prop-types";

import { AuthContext, AuthReducer } from ".";

const initialState = {
  logged: false,
  name: "",
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, initialState);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
