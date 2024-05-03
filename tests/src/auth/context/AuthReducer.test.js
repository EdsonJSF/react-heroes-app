import { AuthReducer } from "../../../../src/auth/context/AuthReducer";
import { TYPES } from "../../../../src/auth/types/types";

describe("Test on AuthReducer", () => {
  const testState = {
    logged: false,
    user: {},
  };

  test("should return default state", () => {
    const authState = AuthReducer(testState, { type: "noting" });

    expect(authState).toEqual(testState);
  });

  test("should call login", () => {
    const authState = AuthReducer(testState, {
      type: TYPES.login,
      payload: { id: 1, name: "name" },
    });

    expect(authState.logged).toBe(true);
    expect(authState.user).toEqual({ id: 1, name: "name" });
  });

  test("should call logout", () => {
    const authState = AuthReducer(testState, {
      type: TYPES.logout,
    });

    expect(authState.logged).toBe(false);
    expect(authState.user).toEqual({});
  });
});
