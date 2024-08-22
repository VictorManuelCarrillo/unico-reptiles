import mongoose from 'mongoose';

// switch between databases DEV or PRODUCTION
const dbUri = process.env.MONGODB_URI_DEV;
// const dbUri = process.env.MONGODB_URI_PRODUCTION;

export const connectDB = async () => {
  try {
    if (!dbUri) {
      throw new Error('MONGODB_URI_DEV is not defined');
    }

    const { connection } = await mongoose.connect(dbUri);

    if (connection.readyState === 1) {
      console.log('MongoDB is connected');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log('Something went wrong with DB connection', error);
    return Promise.reject(false);
  }
};
