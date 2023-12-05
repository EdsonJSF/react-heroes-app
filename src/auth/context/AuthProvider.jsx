import { useReducer } from "react";
import PropTypes from "prop-types";

import { AuthContext, AuthReducer } from ".";
import { TYPES } from "../types/types";

const init = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, {}, init);

  const login = async (name = "") => {
    const payload = {
      id: "1",
      name: name,
    };
    const action = {
      type: TYPES.login,
      payload,
    };

    sessionStorage.setItem("user", JSON.stringify(payload));

    authDispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
