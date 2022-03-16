import "./about.css";

import Typewriter from "typewriter-effect";

import san from "../images/sanjeet.png";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="main">
        <div className="content">
          <h2 data-aos="fade-down" className="hello">
            Hello, I am
          </h2>
          <h1 className="name">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Sanjeet Kumar Sangam"],
              }}
            ></Typewriter>
          </h1>
          <h2 className="intro">Full Stack Developer</h2>

          <h2 className="abt">
            I am a Full Stack web developer. I love programming and also love to
            make wonderful web apps. I will love to contribute more in this
            field and also I will be love to face new challenges in the upcoming
            days. Apart from coding, Drawing is my favorite which I like the
            most.
          </h2>
          <a
            className="rsmue"
            href="https://drive.google.com/file/d/1nL0ko6UpIACpsygvKqd4ifu2sxgQ9bau/view?usp=sharing"
            target="_blank"
          >
            <button className="resume">Resume</button>
          </a>
        </div>

        <div className="png">
          <img src={san} alt="" />
        </div>
      </div>

      <div className="links-social">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/sanjeet-kumar-sangam-09097421a/"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a href="https://github.com/sanjeetSangam" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="https://twitter.com/saninfo4" target="_blank">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/san_arts_official_/"
            target="_blank"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};
