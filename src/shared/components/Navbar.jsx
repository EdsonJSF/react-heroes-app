import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { NavbarItem } from "./NavbarItem";
import { AuthContext } from "../../auth";

const HeroesRoutes = [
  {
    path: "/marvel",
    name: "Marvel",
  },
  {
    path: "/dc",
    name: "DC",
  },
  {
    path: "/search",
    name: "Search",
  },
];

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {HeroesRoutes.map((route) => (
            <NavbarItem route={route} key={route.name} />
          ))}
        </div>
      </div>

      <div className="navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-sm-end">
        <ul className="navbar-nav">
          <span className="nav-item nav-link text-primary">{user.name}</span>

          <button
            className="nav-item nav-link btn text-start"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
