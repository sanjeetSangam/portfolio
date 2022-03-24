import React from "react";
import RSbtn from "./RSbtn";
import "./home.css";

import ME from "../../assets/sanjeet.png";
import HeaderSocials from "./HeaderSocials";

import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <header id="home">
      <div className="container home__container">
        <h5>Hello I'm</h5>

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

        <h5>Full Stack Developer</h5>
        <h5 className="about__cont">
          I am a Full Stack web developer. I love programming and also love to
          make wonderful web apps. I will love to contribute more in this field
          and also I will be love to face new challenges in the upcoming days.
          Apart from coding, Drawing is my favorite which I like the most.
        </h5>

        <RSbtn />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
