import React from "react";
import Carousel from "react-elastic-carousel";
import { data } from "../data/Data";
import { Goto } from "../styled-components/Goto";
import { Heading } from "../styled-components/Heading";
import { List } from "../styled-components/ProjectList";
import "../styles/projects.css";

export const Projects = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <section id="projects" className="projects">
      <div className="heading" data-aos="fade-up">
        <Heading>
          <h2>Projects ({data.length}) </h2>
        </Heading>
      </div>

      <div className="crsl">
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
                <List key={id} className="">
                  <div className="projects__item">
                    <div className="projects__item-image">
                      <img src={image} alt="project" />
                      <div className="back"></div>
                      <h5 className="desc">{des}</h5>
                    </div>
                    <h3 data-aos="fade-up">{title}</h3>

                    <h5 data-aos="fade-up">{projectType}</h5>

                    <div data-aos="fade-up" className="tech_stacks">
                      {techStach.map((e) => {
                        return (
                          <div>
                            <img alt="" src={e} />
                          </div>
                        );
                      })}
                    </div>

                    <div className="projects__item-cta" data-aos="fade-up">
                      <a
                        href={github}
                        className="btn"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Goto type="github">Github</Goto>
                      </a>

                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Goto type="demo">Demo</Goto>
                      </a>
                    </div>
                  </div>
                </List>
              );
            }
          )}
        </Carousel>
      </div>
    </section>
  );
};
