import { Navigate, Route, Routes } from "react-router-dom";

import { DCPage } from "./heroes/pages/DCPage";
import { LoginPage } from "./auth/pages/LoginPage";
import { MarvelPage } from "./heroes/pages/MarvelPage";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/dc" element={<DCPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/marvel" element={<MarvelPage />} />

      <Route path="/*" element={<Navigate to="/marvel" />} />
    </Routes>
  );
};
