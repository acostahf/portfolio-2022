import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>About ME!</h1>
        <p>
          Hello! I&apos;'m Fabian, a software developer based in Austin, TX.
        </p>
        <p>
          I love being part of a team to make a vision into a reality online and
          have grown to enjoy the front end side of development, whether that is
          a React project, email templates, or learning a new stack.
        </p>
        <p>
          Since graduating from General Assembly, I had the opportunity to work
          for Nimaroh studios as a front end developer on a few projects and
          continued to be a freelance developer for them when they do get a new
          client looking for a website.
        </p>
      </div>
    </div>
  );
};

export default About;
