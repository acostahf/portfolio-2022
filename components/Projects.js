import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.scss";

import Card from "./Card";

const Projects = (data) => {
  return (
    <div className={styles.container}>
      {data.projects.map((project, i) => {
        // console.log(data.assets[i]);
        const imgUrl = data.assets[i];
        // console.log(imgUrl.url);
        return (
          <Card
            key={i}
            title={project.title}
            thumbnail={imgUrl.url}
            alt={project.title}
          />
        );
      })}
    </div>
  );
};

export default Projects;
