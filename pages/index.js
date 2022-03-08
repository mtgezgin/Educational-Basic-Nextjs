import connectDb from '../connection/db';
import MeetupList from '../components/meetups/MeetupList';
import Meetup from '../Models/Meetup';
import Head from 'next/head';

const HomePage = (props) => {
	const { meetups } = props;
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name='description' content='Home page' />
			</Head>
			<MeetupList meetups={meetups} />
		</>
	);
};

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;
// 	return {
// 		//fetch data from an API
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	}
// }
export async function getStaticProps() {
	// fetch data from an API

	connectDb();
	const meetups = await Meetup.find();
	const loadedMeetups = meetups.map((meetup) => ({
		title: meetup.title,
		description: meetup.description,
		image: meetup.image,
		address: meetup.address || 'Some address here',
		id: meetup._id.toString(),
	}));

	return {
		props: {
			meetups: loadedMeetups,
		},
		revalidate: 1,
	};
}

export default HomePage;
