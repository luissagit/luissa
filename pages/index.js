import Layout from '../components/layout';
import Head from 'next/head';
import Announcement from '../components/announcement';
import ENDPOINT from '../config/endpoint';

const Home = ({ data }) => {
	return(
		<Layout>
			<Head>
				<title>ln garage</title>
			</Head>
			<Announcement data={data} />
		</Layout>
	);
}

export async function getStaticProps() {
	try {
		const res = await fetch(ENDPOINT.announcement);
		const data = await res.json();

		return {
			props: {
				data
			}
		}
	} catch(error) {
		return {
			props: {
				data: null
			},
			revalidate: 1,
		}
	}
}

export default Home;