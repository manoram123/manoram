import mongoose, { ConnectOptions } from "mongoose";

export default async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.NEXT_MONGODB_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
