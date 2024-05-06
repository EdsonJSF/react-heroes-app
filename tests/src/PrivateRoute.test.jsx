import { render, screen } from "@testing-library/react";

import { PrivateRoute } from "../../src/private-route";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";

describe("Test on <PrivateRoute />", () => {
  test("should show the children if authenticated", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 1,
        name: "name",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Private Route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });
});
