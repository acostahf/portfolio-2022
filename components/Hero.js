import React from "react";
import styles from "../styles/Hero.module.scss";

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
            I love to build experiences that are user-friendly, modern, and just
            FUN!
          </p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.one}>
            <button className={styles.button_one}>About</button>
          </div>
          <div>
            <button className={styles.button_two}>Projects</button>
          </div>
          <div>
            <button className={styles.button_three}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
