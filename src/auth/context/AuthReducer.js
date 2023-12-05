import { TYPES } from "../types/types";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
      };

    case TYPES.logout:
      return {
        ...state,
        logged: false,
        name: "",
      };

    default:
      return { ...state };
  }
};
