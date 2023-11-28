import { Link, useNavigate } from "react-router-dom";
import { NavbarItem } from "./NavbarItem";

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
    path: "/hero",
    name: "Hero",
  },
  {
    path: "/search",
    name: "Search",
  },
];

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
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
          <span className="nav-item nav-link text-primary">Username</span>

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
