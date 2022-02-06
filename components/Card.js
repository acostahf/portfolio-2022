import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.scss";
import {
  ExternalLinkIcon,
  CodeIcon,
  MenuAlt4Icon,
} from "@heroicons/react/solid";

const Card = (props) => {
  return (
    <div key={props.key} className={styles.card}>
      <div className={styles.img_wrapper}>
        <Image
          src={props.thumbnail}
          height={768}
          width={1100}
          alt={props.alt}
          className={styles.img}
        />
      </div>
      <div className={styles.heading}>
        <h2>{props.title}</h2>
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
  );
};

export default Card;
