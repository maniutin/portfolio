import "./Nav.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <div>
        <div className="nav-pages">
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
              Home
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
        </div>
      </div>
    </nav>
  );
}
