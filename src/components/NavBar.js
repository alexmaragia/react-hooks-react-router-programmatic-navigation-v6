// NavBar.js
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) { // Accept logout function as a prop

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      {/* Add the logout button */}
      <button onClick={logout} className="nav-link">
        Logout
      </button>
    </nav>
  );
}

export default NavBar;
