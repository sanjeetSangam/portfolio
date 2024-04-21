import React from "react";
import { Heading } from "../styled-components/Heading";
import { Skill } from "../styled-components/Skills";
import "../styles/skills.css";

// icons
import { DiReact, DiCss3, DiHtml5 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiRedux } from "react-icons/si";

// back
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiSocketdotio, SiFirebase } from "react-icons/si";

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="heading" data-aos="fade-up">
        <Heading>
          <h2>Skills</h2>
        </Heading>
      </div>

      <div className="skills__box">
        <Skill className="techStacks" data-aos="fade-up">
          <h3>Front End</h3>
          <div className="skills__list">
            <div className="tech">
              <p>
                {" "}
                <DiReact /> ReactJs
              </p>
              <p>
                {" "}
                <SiRedux /> Redux
              </p>
              <p>
                {" "}
                <DiHtml5 /> HTML
              </p>
              <p>
                {" "}
                <DiCss3 /> CSS
              </p>

              <p className="p">
                <IoLogoJavascript />
                JavaScript
              </p>
              <p className="p">
                <FaGitAlt />
                Git
              </p>
              <p className="p">
                <AiFillGithub />
                Github
              </p>
            </div>
          </div>
        </Skill>

        <Skill className="techStacks" data-aos="fade-up">
          <h3>Back End</h3>
          <div className="skills__list">
            <div className="tech">
              <p>
                <FaNodeJs />
                NodeJs
              </p>
              <p>
                <DiMongodb />
                MongoDB
              </p>
              <p>
                <SiExpress />
                ExpressJs
              </p>
              <p>
                <SiSocketdotio />
                Socket.io
              </p>
              <p>
                <SiFirebase />
                Firebase
              </p>
            </div>
          </div>
        </Skill>
      </div>
    </section>
  );
};
