import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Heading } from "../styled-components/Heading";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";

const Experiences = () => {
	const [experiences, setExperiences] = useState([]);
	useEffect(() => {
		const query = '*[_type == "experiences"]';

		client.fetch(query).then((data) => {
			setExperiences(data);
		});
	}, []);
	return (
		<section id="experience">
			<div className="heading" data-aos="fade-up" style={{ marginBottom: "1rem" }}>
				<Heading>
					<h2>Experiences </h2>
				</Heading>
			</div>

			<VerticalTimeline lineColor={"#2c2d42"}>
				{experiences?.length > 0 &&
					experiences.map((experience) => (
						<VerticalTimelineElement
							contentStyle={{
								background: "#1d1836",
								color: "#fff",
							}}
							contentArrowStyle={{ borderRight: "7px solid  #232631" }}
							// date={experience.year}
							iconStyle={{
								background: "#b5daf8",
								display: "grid",
								placeItems: "center",
								overflow: "hidden",
							}}
							icon={
								<img
									src={urlFor(experience.imgUrl)}
									style={{
										width: "80%",
										objectFit: " contain",
										mixBlendMode: "multiply",
									}}
									alt={urlFor(experience.imgUrl)}
								/>
							}
							key={experience._id}
						>
							<motion.div className="app__skills-exp-item" key={experience.year}>
								<div className="app__skills-exp-year">
									<p className="bold-text">{experience.year}</p>
								</div>
								<motion.div className="app__skills-exp-works">
									{experience.works.map((work) => (
										<div key={work.name}>
											<motion.div
												whileInView={{ opacity: [0, 1] }}
												transition={{ duration: 0.5 }}
												className="app__skills-exp-work"
												data-tip
												data-for={work.name}
											>
												<h4 className="bold-text">{work.name}</h4>
												<p className="p-text">{work.company}</p>
											</motion.div>
											<div id={work.name} className="skills-tooltip">
												{work.desc}
											</div>
										</div>
									))}
								</motion.div>
							</motion.div>
						</VerticalTimelineElement>
					))}
			</VerticalTimeline>
		</section>
	);
};

export default Experiences;
