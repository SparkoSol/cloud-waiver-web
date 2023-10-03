import mongoose from 'mongoose';

let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection) {
    console.log("MongoDB Connected Successfully!");
    return cachedConnection;
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    cachedConnection = connection;
    console.log("MongoDB Connected Successfully!");
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
}

export default connectToDatabase;
