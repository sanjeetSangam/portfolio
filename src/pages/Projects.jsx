import React, { useEffect, useState } from "react";
// import Carousel from "react-elastic-carousel";
import { Heading } from "../styled-components/Heading";
import "../styles/projects.css";
import { client, urlFor } from "../client";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

export const Projects = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<section id="projects" className="projects">
			<div className="heading" data-aos="fade-up">
				<Heading>
					<h2>Projects ({works.length}) </h2>
				</Heading>
			</div>

			<div className="app__work-filter">
				{["MERN", "Web App", "Node Js", "React JS", "All"].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filterWork.map((work, index) => (
					<motion.div
						whileInView={{ scale: [0.8, 1] }}
						transition={{ duration: 0.4 }}
						className="app__work-item app__flex"
						key={index}
					>
						<div className="app__work-img app__flex">
							<img src={urlFor(work.imgUrl)} alt={work.name} />
						</div>

						<div className="app__work-content app__flex">
							<div className="tech-stacks">
								{work?.teckStacks?.map((stack) => {
									return (
										<img
											src={urlFor(stack)}
											key={stack._key}
											alt={stack._key}
										/>
									);
								})}
							</div>

							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>

							<motion.div
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									staggerChildren: 0.5,
								}}
								className="project__links app__flex"
							>
								<a href={work.projectLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0.8, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillEye />
									</motion.div>
								</a>
								<a href={work.codeLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0.8, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};
