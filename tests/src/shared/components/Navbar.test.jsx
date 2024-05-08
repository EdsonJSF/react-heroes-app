import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { Navbar } from "../../../../src/shared/components/Navbar";
import { AuthContext } from "../../../../src/auth";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Test on <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: {
      id: 1,
      name: "test name",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("should show the user name", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test("should call logout function", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByText("Logout");

    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
  });

  test("should navigate to login page", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByText("Logout");
    fireEvent.click(logoutBtn);

    expect(mockUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
  });
});
