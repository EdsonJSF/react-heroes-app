import { Route, Routes } from "react-router-dom";

import { LoginPage } from "./auth";
import { HeroesRoutes } from "./heroes";
import { PrivateRoute } from "./private-route";
import { PublicRoute } from "./public-router";

export const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
