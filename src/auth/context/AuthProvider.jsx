import { useReducer } from "react";
import PropTypes from "prop-types";

import { AuthContext, AuthReducer } from ".";
import { TYPES } from "../types/types";

const initialState = {
  logged: false,
  user: {},
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, initialState);

  const login = async (name = "") => {
    const action = {
      type: TYPES.login,
      payload: {
        id: "1",
        name: name,
      },
    };

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
