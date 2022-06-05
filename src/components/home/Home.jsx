import React from "react";
import RSbtn from "./RSbtn";
import "./home.css";
import ME from "../../assets/sanjeet.png";
import sanjeet from "../../assets/sangam.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

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
          <h5 className="about__cont">
            I love to do programming and also love to make exciting web apps. I
            had completed my B.tech with the stream of Manufacturing Engineering
            from CIPET college in Ahmedabad. But having a decent interest in
            computer science brings me to the Web development field and now, I
            have learnt MERN stack. I wish to work in a{" "}
            <span
              style={{ color: "skyblue", background: "red", padding: "0.2rem" }}
            >
              technological environment
            </span>{" "}
            and also I will love to face new challenges in the upcoming days.
          </h5>
          <RSbtn />
        </div>

        <HeaderSocials />

        <div className="me__image">
          <div className="glowing__border">
            <div className="me">
              <img src={sanjeet} alt="" />
            </div>

            <div className="my__about">
              I love to do programming and also love to make exciting web apps.
              I had completed my B.tech with the stream of Manufacturing
              Engineering from CIPET college in Ahmedabad. But having a decent
              interest in computer science brings me to the Web development
              field and now, I have learnt MERN stack. I wish to work in a{" "}
              <span
                style={{
                  color: "skyblue",
                  background: "red",
                  padding: "0.2rem",
                }}
              >
                technological environment
              </span>{" "}
              and also I will love to face new challenges in the upcoming days.
            </div>
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
