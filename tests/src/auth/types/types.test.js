import { TYPES } from "../../../../src/auth/types/types";

describe("Test on Types", () => {
  const testTypes = {
    login: "[Auth] Login",
    logout: "[Auth] Logout",
  };

  test("should return defaults types", () => {
    expect(TYPES).toEqual(testTypes);
  });
});
