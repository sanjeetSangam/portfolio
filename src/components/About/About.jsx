import React from "react";
import "./about.css";
import sanjeet from "../../assets/sangam.png";
import bg from "../../assets/profileBG.svg";

const About = () => {
  return (
    <div id="about" className="container about__container">
      <div className="me__profile">
        <img src={bg} alt="" className="profileBG" />
        <img src={sanjeet} alt="" />
      </div>

      <div className="details__me">
        <h4>About Me</h4>

        <h5>
          I love to do programming and also love to make exciting web apps. I
          had completed my B.tech with the stream of Manufacturing Engineering
          from CIPET college in Ahmedabad.{" "}
          <span style={{ color: "yellow" }}>
            But having a decent interest in computer science brings me to the
            Web development field
          </span>{" "}
          and now, I have learnt MERN stack. I wish to work in a technological
          environment and also I will love to face new challenges in the
          upcoming days.
        </h5>
      </div>
    </div>
  );
};

export default About;
