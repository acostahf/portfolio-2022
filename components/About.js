import styles from "../styles/About.module.scss";

const About = () => {
	return (
		<div id="about" className={styles.container}>
			<h1>A Few Things About Me</h1>
			<div className={styles.content}>
				<ul>
					<li>Austin, TX</li>
					<li>Software Engineer for TwoThirtySix Labs</li>
					<li>Lead Software Engineer for Nimaroh Studios</li>
					<li>Freelance Full-Stack Developer</li>
					<li>Blockchain Development</li>
					<li>AI Development</li>
					<li>Shopify Development</li>
					<li>General Assembly Full-Stack Grad</li>
					<li>Car Enthusiast </li>
					<li>NFT Enthusist</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
