import React from "react";

import "./projects.css";

import ikea from "../../assets/ikea.png";
import h_m from "../../assets/h&m.png";
import vrbo from "../../assets/vrbo.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";

import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.jpg";
import js from "../../assets/icons/javascript.png";
import mongo from "../../assets/icons/mongodb.png";
import node from "../../assets/icons/node.png";
import github from "../../assets/icons/github.png";
import git from "../../assets/icons/git.png";
import vscode from "../../assets/icons/vscode.png";
import react from "../../assets/icons/react.png";
import firebase from "../../assets/icons/firebase.png";

const data = [
  {
    id: 1,
    image: h_m,
    title: "H & M CLONE",
    github: "https://github.com/AkshayThakur1995/H-and-M-Project",
    demo: "https://akshaythakur1995.github.io/H-and-M-Project",
    projectType: "Group Project",
    des: "H&M Group is a family of brands and businesses, making it possible for customers around the world to express themselves through fashion and design, and to choose a more sustainable lifestyle.",
    techStach: [html, css, js, vscode, git, github],
  },
  {
    id: 2,
    image: ikea,
    title: "IKEA CLONE",
    github: "https://github.com/sanjeetSangam/ikea-frontend-clone",
    demo: "https://sanjeetsangam.github.io/ikea-frontend-clone/public/home.html",
    projectType: "Group Project",
    des: "IKEA is a global leader in life at home. Founded in Sweden in 1943, IKEA is now a worldwide retailer of affordable, well-designed products and solutions for every room in your home.",
    techStach: [html, css, js, vscode, git, github, mongo, node],
  },
  {
    id: 3,
    image: vrbo,
    title: "VRBO CLONE",
    github: "https://github.com/sanjeetSangam/vrbo-clone",
    demo: "https://vrbo-clone-unit5.netlify.app",
    projectType: "Group Project",
    des: "Vrbo connects homeowners with families and vacationers looking for something more than a hotel for their trip.",
    techStach: [html, css, js, vscode, git, github, react],
  },
  {
    id: 4,
    image: facebook,
    title: "Facebook CLONE",
    github: "https://github.com/sanjeetSangam/facebook-inspired-clone",
    demo: "https://fb-inspired-clone.netlify.app/",
    projectType: "Personal Project",
    des: "Facebook is social media plateform where people from all over the world came and meet, share things and so on.",
    techStach: [html, css, js, vscode, git, github, react, firebase],
  },
  {
    id: 5,
    image: whatsapp,
    title: "Whatsapp CLONE",
    github: "https://github.com/sanjeetSangam/whatsapp",
    demo: "https://whatsapp-inspired.netlify.app/",
    projectType: "Group Project",
    des: "Whatsapp is social media plateform where people through contacts or phone number come to meet and chat, share things and so on.",
    techStach: [html, css, js, vscode, git, github, react, firebase],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container projects__container">
        {data.map(
          ({ id, image, title, github, demo, projectType, des, techStach }) => {
            return (
              <article key={id} className="projects__item">
                <div className="projects__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>

                <h5>{projectType}</h5>

                <h5>{des}</h5>

                <div className="tech_stacks">
                  {techStach.map((e) => {
                    return (
                      <div>
                        <img src={e} />
                      </div>
                    );
                  })}
                </div>

                <div className="projects__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
