import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/public-router";
import { AuthContext } from "../../src/auth";

describe("Test on <PublicRoute />", () => {
  const contextValue = {
    logged: false,
  };

  test("should show the children if not authenticated", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Public Route")).toBeTruthy();
  });
});
