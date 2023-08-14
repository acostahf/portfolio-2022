import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home({ data }) {
	return (
		<div className={styles.main}>
			<Head>
				<title>Fabian Codes</title>
				<meta
					name="description"
					content="Fabian's Software Developer Portfolio"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />
			<Projects {...data} />
			<About />
			<Contact />
		</div>
	);
}

export async function getStaticProps() {
	const { data: data } = await client
		.query({
			query: gql`
				query {
					projects(first: 20) {
						description
						id
						title
						website
					}
					assets(first: 20) {
						url
						width
						height
					}
				}
			`,
		})
		.catch((err) => {
			return { data: "There was an error!" };
		});
	// console.log(data);
	return {
		props: {
			data,
		},
	};
}
