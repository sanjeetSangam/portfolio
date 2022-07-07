import React from "react";
import "../styles/about.css";

import me from "../assets/sangam.png";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="profile__image">
          <img src={me} alt="sanjeetsangam" />
        </div>

        <div className="profile__info">
          <h2>About Me</h2>
          <h4>
            I love to do programming and also love to make exciting web apps. I
            had completed my B.tech with the stream of Manufacturing Engineering
            from CIPET college in Ahmedabad. <br />
            But having a decent interest in computer science brings me to the
            Web development field and now, I have learnt MERN stack. I wish to
            work in a technological environment and also I will love to face new
            challenges in the upcoming days.
            <br />
            <br />
          </h4>
        </div>
      </div>
    </section>
  );
};
