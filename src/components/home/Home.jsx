import React from "react";
import RSbtn from "./RSbtn";
import "./home.css";
import front from "../../assets/book.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

import blob from "../../assets/blob.svg";

const Home = () => {
  return (
    <header id="home">
      <div className="container home__container">
        <div className="about__myself">
          <h5 style={{ color: "yellow" }}>Hello I'm</h5>

          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Sanjeet Kumar Sangam"],
              }}
            ></Typewriter>
          </h1>

          <h4
            style={{
              color: "red",
              fontWeight: "bold",
              background: "yellow",
              padding: "0.2rem 1rem",
              width: "max-content",
              margin: "auto",
            }}
          >
            Full Stack Web Developer
          </h4>

          <RSbtn />
        </div>

        <HeaderSocials />

        <div className="me__image">
          <div className="me">
            <img src={blob} alt="" className="bgHome" />
            <img src={front} alt="" />
          </div>
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
