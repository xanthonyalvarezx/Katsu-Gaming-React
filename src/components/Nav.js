import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/Nav.css";
const Nav = () => {
  return (
    <nav id="navLinks">
      <ul className="linkList">
        <li className="navItem">
          <NavLink to="/">Home</NavLink>
        </li>

        <FontAwesomeIcon className="navIcon" icon={faUser} />
        <li className="navItem">
          <NavLink to="/About">About</NavLink>
        </li>

        <FontAwesomeIcon className="navIcon" icon={faTv} />
        <li className="navItem">
          <NavLink to="/Content">Content</NavLink>
        </li>
        <FontAwesomeIcon className="navIcon" icon={faEnvelope} />
        <li className="navItem">
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
