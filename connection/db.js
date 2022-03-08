import mongoose from 'mongoose';

const connection = {};

const connectDb = async () => {
	if (connection.isConnected) {
		return;
	}
	try {
		const db = await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected!!');
		connection.isConnected = db.connections[0].readyState;
		console.log(connection.isConnected);
	} catch (error) {
		console.log(error);
	}
};

export default connectDb;
