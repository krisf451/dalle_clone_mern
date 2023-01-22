import mongoose from 'mongoose';

const User = new mongoose.Schema({
  user_id: { type: String, required: true },
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  imageUrl: { type: String },
});

const UserSchema = mongoose.model('User', User);

export default UserSchema;
