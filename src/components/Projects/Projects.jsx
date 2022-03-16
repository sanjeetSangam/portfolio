import "./projects.css";

import ikea from "../images/ikea.png";
import h_m from "../images/h&m.png";

import html from "../images/icons/html.png";
import css from "../images/icons/css.jpg";
import js from "../images/icons/javascript.png";
import mongo from "../images/icons/mongodb.png";
import node from "../images/icons/node.png";
import github from "../images/icons/github.png";
import git from "../images/icons/git.png";
import vscode from "../images/icons/vscode.png";

export const Projects = () => {
  return (
    <div className="projects" id="Project">
      <div className="ProjectList">
        <div className="title-project">
          <div className="main-PR">
            <h1>Projects</h1>
          </div>

          <div className="lists">
            <div className="ikea">
              <div className="screen">
                <img src={ikea} alt="" />
              </div>

              <div className="des">
                <p>
                  IKEA is a global leader in life at home. Founded in Sweden in
                  1943, IKEA is now a worldwide retailer of affordable,
                  well-designed products and solutions for every room in your
                  home.
                </p>
              </div>

              <div className="tech-stack">
                <h2>IKEA clone</h2>
                <div className="icons">
                  <div className="icon">
                    <img src={html} alt="" />
                  </div>
                  <div className="icon">
                    <img src={css} alt="" />
                  </div>
                  <div className="icon">
                    <img src={js} alt="" />
                  </div>
                  <div className="icon">
                    <img src={mongo} alt="" />
                  </div>
                  <div className="icon">
                    <img src={node} alt="" />
                  </div>
                  <div className="icon">
                    <img src={vscode} alt="" />
                  </div>
                  <div className="icon">
                    <img src={git} alt="" />
                  </div>
                  <div className="icon">
                    <img src={github} alt="" />
                  </div>
                </div>
              </div>

              <div className="links">
                <button>
                  <a
                    href="https://ikea-clone-frontend-masai.herokuapp.com/home.html"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/sanjeetSangam/ikea-frontend-clone"
                    target="_blank"
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>
            <div className="h-m">
              <div className="screen">
                <img src={h_m} alt="" />
              </div>

              <div className="des">
                <p>
                  H&M Group is a family of brands and businesses, making it
                  possible for customers around the world to express themselves
                  through fashion and design, and to choose a more sustainable
                  lifestyle.
                </p>
              </div>

              <div className="tech-stack">
                <h2>H&M clone</h2>

                <div className="icons">
                  <div className="icon">
                    <img src={html} alt="" />
                  </div>
                  <div className="icon">
                    <img src={css} alt="" />
                  </div>
                  <div className="icon">
                    <img src={js} alt="" />
                  </div>
                  <div className="icon">
                    <img src={vscode} alt="" />
                  </div>
                  <div className="icon">
                    <img src={git} alt="" />
                  </div>
                  <div className="icon">
                    <img src={github} alt="" />
                  </div>
                </div>
              </div>

              <div className="links">
                <button>
                  <a
                    href="https://akshaythakur1995.github.io/H-and-M-Project/"
                    target="_blank"
                  >
                    DEMO
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/AkshayThakur1995/H-and-M-Project"
                    target="_blank"
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
