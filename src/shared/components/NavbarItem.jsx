import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NavbarItem = ({ route }) => {
  if (!route) return null;

  return (
    <NavLink
      className={({ isActive }) =>
        `nav-item nav-link ${isActive ? "active" : ""}`
      }
      to={route.path}
    >
      {route.name}
    </NavLink>
  );
};

NavbarItem.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};
