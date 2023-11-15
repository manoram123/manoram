import mongoose, { Schema, Document, Model } from "mongoose";
const userSchema: Schema = new Schema({
  username: { type: String, required: true, maxLength: 16 },
  first_name: { type: String, required: true, maxLength: 50 },
  last_name: { type: String, required: true, maxLength: 50 },
  email: { type: String, required: true, maxLength: 50 },
  password: { type: String, required: true, maxLength: 32 },
  image: { type: String },
});

// Define the interface for the user document
export interface IUser extends Document {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image: string;
}

// Define the model for the user
const UserModel: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default UserModel;
