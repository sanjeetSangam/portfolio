import React from "react";

import { BsPatchCheckFill } from "react-icons/bs";

import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>

          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />

              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />

              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />

              <div>
                <h4>JAVASCRIPT</h4>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />

              <div>
                <h4>REACTJS</h4>
              </div>
            </article>
          </div>
        </div>


        <div className="skills__frontend">
          <h3>Backend Development</h3>

          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />

              <div>
                <h4>NODEJS</h4>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />

              <div>
                <h4>MONGODB</h4>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />

              <div>
                <h4>MONGOOSE</h4>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />

              <div>
                <h4>EXPRESS</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
