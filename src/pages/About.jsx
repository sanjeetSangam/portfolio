import React from "react";
import "../styles/about.css";

import me from "../assets/sangam.png";
import { Heading } from "../styled-components/Heading";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="heading" data-aos="fade-down">
        <Heading>
          <h2>About Me</h2>
        </Heading>
      </div>

      <div className="about__content">
        <div data-aos="fade-right" className="profile__image">
          <img src={me} alt="sanjeetsangam" />
        </div>

        <div className="profile__info">
          <h4 data-aos="fade-down">
          Experienced full stack developer with two years of professional practice in developing and deploying web applications. <br /> Proficient in multiple programming languages and frameworks, specializing in crafting intuitive and adaptable user interfaces. <br /> Collaborative team player known for strong communication and teamwork abilities.
            {/* I love to make exciting web apps. <br /> I
            had completed my B.tech with the stream of Manufacturing Engineering
            from CIPET college in Ahmedabad. <br />
            But having a decent interest in computer science brings me to the
            Web development field and now, I have learnt MERN stack. I wish to
            work in a technological environment and also I will love to face new
            challenges in the upcoming days. */}
            <br />
            <br />
          </h4>
        </div>
      </div>
    </section>
  );
};
