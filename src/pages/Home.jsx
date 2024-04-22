import React, { useState } from "react";
import { Link } from "react-scroll";
import { HomeButton } from "../styled-components/HomeButton";
import "../styles/home.css";
import Typical from "react-typical";
import { motion } from "framer-motion";

import homeIMG from "../assets/book.png";

import { images } from "../constants";

import { AiFillLinkedin, AiFillGithub, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

import { Socials } from "../styled-components/Socials";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

export const Home = () => {
	const [contact] = useState(true);

	return (
		<section id="home" className="home" data-aos="zoom">
			<div className="home__content">
				<h3 data-aos="fade-down">Hello, I am </h3>
				<h1 data-aos="fade-down">Sanjeet Kumar Sangam</h1>
				<h2>
					<span style={{ color: "#814309" }}>
						<Typical
							steps={[
								"Full Stack Developer 👨‍💻",
								1000,
								"Artist 🎨",
								1000,
								"YouTuber 	📽️",
								1000,
							]}
							loop={Infinity}
							wrapper="p"
						/>
					</span>
				</h2>

				<div className="home__buttons">
					<a
						download
						href="https://drive.google.com/file/d/1x9k4Xlm5WzUTcQpT95nS786HGFC_Z32q/view"
						target="_blank"
						rel="noreferrer"
						data-aos="fade-right"
					>
						<HomeButton>
							<span>Resume</span>
							<i></i>
						</HomeButton>
					</a>

					<HomeButton data-aos="fade-left" contact={contact}>
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
						data-aos="flip-up"
					>
						<Socials icon="linkedin">
							<AiFillLinkedin />
						</Socials>
					</a>

					<a
						href="https://github.com/sanjeetSangam"
						rel="noreferrer"
						target="_blank"
						data-aos="flip-up"
					>
						<Socials icon="github">
							<AiFillGithub />
						</Socials>
					</a>

					<a
						href="https://www.youtube.com/channel/UCcqNqRLGolqqWUCFybH8adw"
						target="_blank"
						rel="noreferrer"
						data-aos="flip-up"
					>
						<Socials icon="youtube">
							<AiFillYoutube />
						</Socials>
					</a>
					<a
						href="https://www.instagram.com/san_arts_official_/"
						target="_blank"
						rel="noreferrer"
						data-aos="flip-up"
					>
						<Socials icon="insta">
							<AiFillInstagram />
						</Socials>
					</a>
				</div>
			</div>

			<div className="home__img">
				<motion.img
					whileInView={{ scale: [0.8, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={homeIMG}
					alt="home"
				/>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/>
			</div>

			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[images.react, images.redux, images.sass, images.javascript].map(
					(circle, index) => (
						<div className="circle-cmp app__flex" key={`circle-${index}`}>
							<img src={circle} alt="profile_bg" />
						</div>
					)
				)}
			</motion.div>
		</section>
	);
};
