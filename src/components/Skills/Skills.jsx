import "./skills.css";

import html from "../images/icons/html.png";
import css from "../images/icons/css.jpg";
import js from "../images/icons/javascript.png";
import react from "../images/icons/react.png";
import mongo from "../images/icons/mongodb.png";
import node from "../images/icons/node.png";
import github from "../images/icons/github.png";
import git from "../images/icons/git.png";
import vscode from "../images/icons/vscode.png";
import redux from "../images/icons/redux.png";

export const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-content">
        <div className="SKILLS">
          <h1>SKILLS</h1>
        </div>

        <div className="showSkills">
          <div className="skillname">
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div className="skillname">
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div className="skillname">
            <img src={js} alt="" />
            <p>JS</p>
          </div>
          <div className="skillname">
            <img src={react} alt="" />
            <p>REACT</p>
          </div>
          <div className="skillname">
            <img src={mongo} alt="" />
            <p>MONGODB</p>
          </div>
          <div className="skillname">
            <img src={node} alt="" />
            <p>NODEJS</p>
          </div>
          <div className="skillname">
            <img src={git} alt="" />
            <p>GIT</p>
          </div>
          <div className="skillname">
            <img src={github} alt="" />
            <p>GITHUB</p>
          </div>
          <div className="skillname">
            <img src={vscode} alt="" />
            <p>VSCODE</p>
          </div>
          <div className="skillname">
            <img src={redux} alt="" />
            <p>REDUX</p>
          </div>
        </div>
      </div>
    </div>
  );
};
