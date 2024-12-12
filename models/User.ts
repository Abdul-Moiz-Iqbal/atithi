import mongoose, { Schema, Document, Model } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  role: string; // e.g., 'admin'
}

const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
