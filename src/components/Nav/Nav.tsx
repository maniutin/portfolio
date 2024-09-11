import "./Nav.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-link">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "underline",
                }
              : {}
          }
        >
          About
        </NavLink>
      </div>

      <div className="nav-link">
        <NavLink
          to="/projects"
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "underline",
                }
              : {}
          }
        >
          Projects
        </NavLink>
      </div>

      <div className="nav-link">
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "underline",
                }
              : {}
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
