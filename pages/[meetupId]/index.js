import MeetupDetail from '../../components/meetups/MeetupDetail';
import connectDb from '../../connection/db';
import Meetup from '../../Models/Meetup';
import Head from 'next/head';
const MeetupDetailPage = (props) => {
	const { meetup } = props;
	return (
		<>
			<Head>
				<title>{meetup.title}</title>
				<meta name='description' content={meetup.description} />
			</Head>
			<MeetupDetail
				image={meetup.image}
				title={meetup.title}
				address={meetup.address}
				description={meetup.description}
			/>
		</>
	);
};

export async function getStaticPaths() {
	connectDb();
	const meetups = await Meetup.find().select('_id');

	return {
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
		fallback: 'blocking',
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup
	const { meetupId } = context.params;
	connectDb();
	const meetup = await Meetup.findById(meetupId);
	const loadedMeetup = {
		id: meetupId,
		title: meetup.title,
		description: meetup.description,
		address: meetup.address,
		image: meetup.image,
	};

	return {
		props: {
			meetup: loadedMeetup,
		},
		revalidate: 1,
	};
}

export default MeetupDetailPage;
