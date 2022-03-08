// our-domain.com/new-meetup
import axios from 'axios';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
	const router = useRouter();
	const addMeetupHandler = async (meetupData) => {
		const response = await axios.post('/api/new-meetup', meetupData);
		console.log(response);
		router.push('/');
	};
	return (
		<>
			<Head>
				<title>Create a new meetup</title>
				<meta name='description' content='Create a new meetup' />
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	);
};

export default NewMeetupPage;
