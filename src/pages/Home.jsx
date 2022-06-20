import React, { useState } from "react";
import { Link } from "react-scroll";
import { HomeButton } from "../styled-components/HomeButton";
import "../styles/home.css";
import blob from "../assets/blob.svg";

import homeIMG from "../assets/book.png";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

import { Socials } from "../styled-components/Socials";

export const Home = () => {
  const [contact] = useState(true);
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h3>Hello I am</h3>
        <h1>Sanjeet Kumar Sangam</h1>
        <h2>Full Stack Developer</h2>

        <div className="home__buttons">
          <a
            href="https://drive.google.com/file/d/1x9k4Xlm5WzUTcQpT95nS786HGFC_Z32q/view"
            target="_blank"
            rel="noreferrer"
          >
            <HomeButton>
              <span>Resume</span>
              <i></i>
            </HomeButton>
          </a>

          <HomeButton contact={contact}>
            <span>
              <Link to="contacts" offset={-100}>
                Contact Me
              </Link>
            </span>
            <i></i>
          </HomeButton>
        </div>

        <div className="socials__buttons">
          <a
            href="https://www.linkedin.com/in/sanjeet-kumar-sangam-09097421a/"
            target="_blank"
            rel="noreferrer"
          >
            <Socials icon="linkedin">
              <AiFillLinkedin />
            </Socials>
          </a>

          <a
            href="https://github.com/sanjeetSangam"
            rel="noreferrer"
            target="_blank"
          >
            <Socials icon="github">
              <AiFillGithub />
            </Socials>
          </a>

          <a
            href="https://www.youtube.com/channel/UCECZYmMMN-GpoGkSevc_NTg"
            target="_blank"
            rel="noreferrer"
          >
            <Socials icon="youtube">
              <AiFillYoutube />
            </Socials>
          </a>
          <a
            href="https://www.instagram.com/san_arts_official_/"
            target="_blank"
            rel="noreferrer"
          >
            <Socials icon="insta">
              <AiFillInstagram />
            </Socials>
          </a>
        </div>
      </div>

      <div className="home__img">
      <img src={blob} alt="" className="bgHome" />
        <img src={homeIMG} alt="home" />
      </div>

      <div className="absolue"></div>
    </section>
  );
};
