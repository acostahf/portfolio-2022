import React from "react";
import styles from "../styles/Hero.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1>Hello, Im Fabian</h1>
          <h2>
            <span>&#47;&#47;</span> A Software Developer
          </h2>
          <p>
            Building experiences that are user-friendly, modern, and just FUN!
          </p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.one}>
            <Link activeClass="active" to="about" spy={true}>
              <button className={styles.button_one}>About</button>
            </Link>
          </div>
          <div>
            <Link activeClass="active" to="projects" spy={true}>
              <button className={styles.button_two}> Projects </button>
            </Link>
          </div>
          <div>
            <Link activeClass="active" to="contact" spy={true}>
              <button className={styles.button_three}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
