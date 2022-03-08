import mongoose from 'mongoose';
const MeetupSchema = new mongoose.Schema({
	title: String,
	description: String,
	image: String,
	address: String,
});

module.exports =
	mongoose.models.Meetup || mongoose.model('Meetup', MeetupSchema);
