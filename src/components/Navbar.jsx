import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "../styled-components/Menu";
import "../styles/navbar.css";
import { Loader } from "./Loader";

import { RiMenuFoldFill, RiCloseLine } from "react-icons/ri";

export const Navbar = ({ home }) => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<nav>
			<Link to="home" offset={-100}>
				<div className="brand">
					<Loader />
					<h3>Sanjeet</h3>
				</div>
			</Link>

			<div className="bigScreenNav">
				<ul className={"menus"}>
					<li className="menu__item">
						<Link to="home" offset={-100}>
							<Menu>Home</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link to="about" offset={-100}>
							<Menu>About</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link to="skills" offset={-100}>
							<Menu>Skills</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link to="projects" offset={-100}>
							<Menu>Projects</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link to="experience" offset={-100}>
							<Menu>Experiences</Menu>
						</Link>
					</li>

					<li className="menu__item">
						{" "}
						<Link to="contacts" offset={-100}>
							<Menu>Contacts</Menu>
						</Link>
					</li>
				</ul>
			</div>

			<div className="smallScreenNav">
				<button onClick={() => setOpenMenu(true)}>
					<RiMenuFoldFill />
				</button>

				{openMenu && (
					<div className="menus__small">
						<ul className="small">
							<button onClick={() => setOpenMenu(false)}>
								<RiCloseLine />
							</button>

							<li className="menu__item">
								<Link
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="home"
									offset={-100}
								>
									<Menu>Home</Menu>
								</Link>
							</li>

							<li className="menu__item">
								<Link
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="about"
									offset={-100}
								>
									<Menu>About</Menu>
								</Link>
							</li>

							<li className="menu__item">
								<Link
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="skills"
									offset={-100}
								>
									<Menu>Skills</Menu>
								</Link>
							</li>

							<li className="menu__item">
								<Link
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="projects"
									offset={-100}
								>
									<Menu>Projects</Menu>
								</Link>
							</li>

							<li className="menu__item">
								<Link
									offset={-100}
									onClick={() => setOpenMenu(false)}
									data-aos="fade-up"
									to="experience"
								>
									<Menu>Experiences</Menu>
								</Link>
							</li>

							<li className="menu__item">
								<Link
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="contacts"
									offset={-100}
								>
									<Menu>Contacts</Menu>
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};
