import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <h1>A Few Things About Me</h1>
      <div className={styles.content}>
        <ul>
          <li>Austin, TX</li>
          <li>Software Developer for Nimaroh Studios</li>
          <li>Freelance Developer</li>
          <li>General Assembly and Austin Community College</li>
          <li>Car Enthusiast </li>
          <li>NFT Enthusist</li>
          <li>Learning blockchain development</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
