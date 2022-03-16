import "./navbar.css";

// import san from "../images/san.jpg";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navabr" id="navbar">
      <div className="logo">
        <h4>Sanjeet</h4>
      </div>
      <div className="menus">
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
