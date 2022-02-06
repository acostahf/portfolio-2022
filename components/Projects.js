import React from "react";
import Image from "next/image";
import {
  ExternalLinkIcon,
  CodeIcon,
  MenuAlt4Icon,
} from "@heroicons/react/solid";
import styles from "../styles/Projects.module.scss";

const Projects = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.img_wrapper}>
          <Image
            src="/assets/tlocs.png"
            height="769"
            width="1183"
            alt="card image"
            className={styles.img}
          />
        </div>
        <div className={styles.heading}>
          <h2>Title</h2>
          <div className={styles.icons}>
            <a href="#">
              <ExternalLinkIcon className={styles.icon} />
            </a>
            <a href="#">
              <CodeIcon className={styles.icon} />
            </a>
            <a href="#">
              <MenuAlt4Icon className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
