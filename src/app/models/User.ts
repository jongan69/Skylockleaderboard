import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  score: { type: Number, default: 0 }
});

// Check if the model exists before compiling it
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User; 