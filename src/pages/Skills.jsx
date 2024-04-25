import React from "react";
import { Heading } from "../styled-components/Heading";
import { Skill } from "../styled-components/Skills";
import "../styles/skills.css";

// icons
import { DiReact, DiCss3, DiHtml5 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { SiRedux, SiCanva, SiTypescript } from "react-icons/si";
import { FaJava, FaFigma, FaGitAlt, FaSalesforce, FaSourcetree } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

// backend icons
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiSocketdotio, SiFirebase } from "react-icons/si";

export const Skills = () => {
	const generateId = () => {
		return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
	};

	return (
		<section id="skills" className="skills">
			<div className="heading" data-aos="fade-up">
				<Heading>
					<h2>Skills</h2>
				</Heading>
			</div>

			<div className="skills__box">
				<Skill className="techStacks" data-aos="fade-up">
					<h3>Frontend</h3>
					<div className="skills__list">
						<div className="tech">
							{[
								{ id: generateId(), icon: <DiReact />, name: "ReactJs" },
								{ id: generateId(), icon: <SiRedux />, name: "Redux" },
								{ id: generateId(), icon: <DiHtml5 />, name: "HTML" },
								{ id: generateId(), icon: <DiCss3 />, name: "CSS" },
								{
									id: generateId(),
									icon: <IoLogoJavascript />,
									name: "JavaScript",
								},
								{ id: generateId(), icon: <SiTypescript />, name: "Typescript" },
							].map((techStack) => (
								<p key={techStack.id}>
									{techStack.icon} {techStack.name}
								</p>
							))}
						</div>
					</div>
				</Skill>

				<Skill className="techStacks" data-aos="fade-up">
					<h3>Backend</h3>
					<div className="skills__list">
						<div className="tech">
							{[
								{ id: generateId(), icon: <FaNodeJs />, name: "NodeJs" },
								{ id: generateId(), icon: <DiMongodb />, name: "MongoDB" },
								{ id: generateId(), icon: <SiExpress />, name: "ExpressJs" },
								{ id: generateId(), icon: <SiSocketdotio />, name: "Socket.io" },
								{ id: generateId(), icon: <SiFirebase />, name: "Firebase" },
							].map((techStack) => (
								<p className="p" key={techStack.id}>
									{techStack.icon}
									{techStack.name}
								</p>
							))}
						</div>
					</div>
				</Skill>
				<Skill className="techStacks" data-aos="fade-up">
					<h3>Others</h3>
					<div className="skills__list">
						<div className="tech">
							{[
								{ icon: <FaJava />, name: "Java" },
								{ icon: <FaSalesforce />, name: "Salesforce" },
								{ icon: <FaGitAlt />, name: "Git" },
								{ icon: <AiFillGithub />, name: "Github" },
								{ icon: <FaFigma />, name: "Figma" },
								{ icon: <TbBrandVscode />, name: "Vs Code" },
								{ icon: <SiCanva />, name: "Canva" },
								{ icon: <FaSourcetree />, name: "Sourcetree" },
							].map((techStach, index) => (
								<p className="p" key={index}>
									{techStach.icon}
									{techStach.name}
								</p>
							))}
						</div>
					</div>
				</Skill>
			</div>
		</section>
	);
};
