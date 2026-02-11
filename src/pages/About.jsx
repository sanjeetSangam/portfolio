import React from "react";
import "../styles/about.css";

import me from "../assets/mine/pc.JPG";
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
            Full-Stack Developer with 3+ years of experience building and
            shipping production-grade web and cross-platform applications.
            <br />
            <br />
            Brings pragmatic engineering expertise in shipping maintainable code
            and developing testable APIs with Node.js and Express. Collaborates
            closely with product and design teams to transform user problems
            into impactful, measurable features while mentoring teammates to
            elevate engineering quality across the stack.
          </h4>
        </div>
      </div>
    </section>
  );
};
