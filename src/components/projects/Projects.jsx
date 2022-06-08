import React from "react";
import Carousel from "react-elastic-carousel";
import "./projects.css";

import ikea from "../../assets/ikea.png";
import h_m from "../../assets/h&m.png";
import vrbo from "../../assets/vrbo.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";
import saashi from "../../assets/saashi1.png";

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
import socket from "../../assets/icons/socket.png";

const data = [
  {
    id: 1,
    image: saashi,
    title: "SAASHI",
    github: "https://github.com/sanjeetSangam/saashi-client",
    demo: "https://saashi.netlify.app/",
    projectType: "Solo Project",
    des: "SASSHI is a chat web app that is made for the chatting between friends and in also groups",
    techStach: [react, mongo, socket, node, css, js, vscode, git, github],
  },
  {
    id: 2,
    image: vrbo,
    title: "VRBO",
    github: "https://github.com/sanjeetSangam/vrbo-clone",
    demo: "https://vrbo-clone-unit5.netlify.app",
    projectType: "Group Project",
    des: "Vrbo connects homeowners with families and vacationers looking for something more than a hotel for their trip.",
    techStach: [html, css, js, vscode, git, github, react],
  },
  {
    id: 3,
    image: ikea,
    title: "IKEA",
    github: "https://github.com/sanjeetSangam/ikea-frontend-clone",
    demo: "https://sanjeetsangam.github.io/ikea-frontend-clone/public/home.html",
    projectType: "Group Project",
    des: "IKEA is a global leader in life at home. Founded in Sweden in 1943, IKEA is now a worldwide retailer of affordable, well-designed products and solutions for every room in your home.",
    techStach: [html, css, js, vscode, git, github, mongo, node],
  },
  {
    id: 4,
    image: facebook,
    title: "Facebook",
    github: "https://github.com/sanjeetSangam/facebook-inspired-clone",
    demo: "https://posting-app.netlify.app/",
    projectType: "Solo Project",
    des: "Facebook is social media plateform where people from all over the world came and meet, share things and so on.",
    techStach: [html, css, js, vscode, git, github, react, firebase],
  },

  {
    id: 5,
    image: "https://pbs.twimg.com/media/FUspndVUUAAibt5?format=jpg&name=large",
    title: "Youtube",
    github: "https://github.com/sanjeetSangam/youtube",
    demo: "https://youtube-san.netlify.app/",
    projectType: "Solo Project",
    des: "Youtube is social-media platform where content creator used to give their content and viewers used to consume those content.",
    techStach: [html, css, js, vscode, git, github, react],
  },
  {
    id: 6,
    image: whatsapp,
    title: "Whatsapp",
    github: "https://github.com/sanjeetSangam/whatsapp",
    demo: "https://chat-wht.netlify.app/",
    projectType: "Group Project",
    des: "Whatsapp is social media plateform where people through contacts or phone number come to meet and chat, share things and so on.",
    techStach: [html, css, js, vscode, git, github, react],
  },
  {
    id: 7,
    image: h_m,
    title: "H & M",
    github: "https://github.com/AkshayThakur1995/H-and-M-Project",
    demo: "https://akshaythakur1995.github.io/H-and-M-Project",
    projectType: "Group Project",
    des: "H&M Group is a family of brands and businesses, making it possible for customers around the world to express themselves through fashion and design, and to choose a more sustainable lifestyle.",
    techStach: [html, css, js, vscode, git, github],
  },
];

const Projects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <section id="projects">
      <h2>Projects ({data.length}) </h2>

      <div className="container projects__container">
        <Carousel breakPoints={breakPoints}>
          {data.map(
            ({
              id,
              image,
              title,
              github,
              demo,
              projectType,
              des,
              techStach,
            }) => {
              return (
                <article key={id} className="projects__item">
                  <div className="projects__item-image">
                    <img src={image} alt="" />
                    <div className="back"></div>
                    <h5 className="desc">{des}</h5>
                  </div>
                  <h3>{title}</h3>

                  <h5>{projectType}</h5>

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
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
