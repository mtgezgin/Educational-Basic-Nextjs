import Meetup from '../../Models/Meetup';
import connectDb from '../../connection/db';
// api/new-meetup

connectDb();

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const data = await req.body;
		const { title, description, image, address } = data;
		const meetup = await Meetup.create({
			title,
			description,
			image,
			address,
		});
		const saveMeetup = await meetup.save();
		res.status(201).json({
			message: 'Meetup created successfully',
			saveMeetup,
		});
	} else {
		res.status(404).send('Not found');
	}
};

export default handler;
