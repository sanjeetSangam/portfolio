import { useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { AiFillContainer } from "react-icons/ai";

import "./navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <div className="logo__nav">
        <a href="#"> Sanjeet</a>
      </div>

      <div className="menus__nav">
        <a
          href="#"
          onClick={() => {
            setActiveNav("#");
          }}
          className={activeNav === "#" ? "active" : ""}
        >
          {/* <AiFillHome /> */}
          Home
        </a>

        <a
          href="#skills"
          onClick={() => {
            setActiveNav("#skills");
          }}
          className={activeNav === "#skills" ? "active" : ""}
        >
          {/* <MdLibraryBooks /> */}
          Skills
        </a>

        <a
          href="#projects"
          onClick={() => {
            setActiveNav("#projects");
          }}
          className={activeNav === "#projects" ? "active" : ""}
        >
          {/* <BsEmojiHeartEyesFill /> */}
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => {
            setActiveNav("#contact");
          }}
          className={activeNav === "#contact" ? "active" : ""}
        >
          {/* <AiFillContainer /> */}
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
