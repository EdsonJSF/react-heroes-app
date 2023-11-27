import { Navigate, Route, Routes } from "react-router-dom";

import { DCPage, MarvelPage } from "./heroes";
import { LoginPage } from "./auth";
import { Navbar } from "./shared";

export const MainRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/dc" element={<DCPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/marvel" element={<MarvelPage />} />

        <Route path="/*" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
