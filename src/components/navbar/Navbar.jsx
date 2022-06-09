import { useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { AiFillContainer } from "react-icons/ai";

import ham from "../../assets/ham.png";

import "./navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  const [toggle, setToggle] = useState(false);

  const stMenu = () => {
    setToggle(false);
  };

  return (
    <nav>
      <div className="big__screen">
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
            href="#about"
            onClick={() => {
              setActiveNav("#about");
            }}
            className={activeNav === "#about" ? "active" : ""}
          >
            {/* <AiFillHome /> */}
            About
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
      </div>

      <div className="small__screen">
        <img src={ham} alt="" onClick={() => setToggle(true)} />

        {toggle && (
          <div className="small__screen__menus">
            <a
              href="#"
              onClick={() => {
                setActiveNav("#");
                setToggle(false);
              }}
              className={activeNav === "#" ? "active" : ""}
            >
              {/* <AiFillHome /> */}
              Home
            </a>

            <a
              href="#about"
              onClick={() => {
                setActiveNav("#about");
                setToggle(false);
              }}
              className={activeNav === "#about" ? "active" : ""}
            >
              {/* <AiFillHome /> */}
              About
            </a>

            <a
              href="#skills"
              onClick={() => {
                setActiveNav("#skills");
                setToggle(false);
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
                setToggle(false);
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
                setToggle(false);
              }}
              className={activeNav === "#contact" ? "active" : ""}
            >
              {/* <AiFillContainer /> */}
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
