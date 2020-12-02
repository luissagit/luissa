import Layout from '../components/layout';
import Head from 'next/head';

const About = () => {
	return(
		<Layout>
			<Head>
				<title>about ln garage</title>
			</Head>
			<div className="text-secondary">
				<h2 className="font-semibold text-3xl">
					About me
				</h2>
			</div>
		</Layout>
	);
}

export default About;