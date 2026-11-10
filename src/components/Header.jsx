import { LuCaravan } from "react-icons/lu";
import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <Link className="link icon-home" to="/">
          <div className="icon-container">
            <LuCaravan id="icon" />
          </div>
        </Link>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link nav-btn active" : "link nav-btn"
            }
            to="/destinations"
          >
            Destinations
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link nav-btn active" : "link nav-btn"
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link nav-btn active" : "link nav-btn"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link nav-btn active" : "link nav-btn"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
