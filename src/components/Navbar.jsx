import React from "react";
import { Link } from "react-scroll";
import { Menu } from "../styled-components/Menu";
import "../styles/navbar.css";
import { Loader } from "./Loader";

export const Navbar = ({ home }) => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMenu = () => setClick(false);

  return (
    <nav>
      <div className="brand">
        <Loader />
        <h3>Sanjeet</h3>
      </div>

      <ul className={"menus"}>
        <li className="menu__item">
          <Link to="home" offset={-100}>
            <Menu>Home</Menu>
          </Link>
        </li>

        <li className="menu__item">
          <Link to="about" offset={-100}>
            <Menu>About</Menu>
          </Link>
        </li>

        <li className="menu__item">
          <Link to="skills" offset={-100}>
            <Menu>Skills</Menu>
          </Link>
        </li>

        <li className="menu__item">
          <Link to="projects" offset={-100}>
            <Menu>Projects</Menu>
          </Link>
        </li>

        <li className="menu__item">
          {" "}
          <Link to="contacts" offset={-100}>
            <Menu>Contacts</Menu>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
