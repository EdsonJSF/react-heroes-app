import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../shared";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="dc" element={<DCPage />} />
          <Route path="hero" element={<HeroPage />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
          {/* <Route path="/*" element={<Navigate to="/marvel" />} /> */}
        </Routes>
      </div>
    </>
  );
};
