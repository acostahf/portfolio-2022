import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.scss";

import Card from "./Card";

const Projects = (data) => {
	console.log(data);
	return (
		<div id="projects" className={styles.container}>
			{data.projects.map((project, i) => {
				// console.log(data.assets[i]);
				const imgUrl = data.assets[i];
				// console.log(imgUrl.url);
				return (
					<div key={i}>
						<Card
							title={project.title}
							thumbnail={imgUrl.url}
							website={project.website}
							github={project.github}
							alt={project.title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Projects;
