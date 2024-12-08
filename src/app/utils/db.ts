import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env, .env.local, or .env.development');
}

const dbConnect = mongoose.connect(MONGODB_URI as string).then((mongoose) => {
  return mongoose;
});


export default dbConnect;
