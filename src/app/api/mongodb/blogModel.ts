import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "./userModel";

const blogSchema: Schema = new Schema(
  {
    title: { type: String, maxLength: 255 },
    content: { type: String },
    slug: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    views: { type: Number, default: 0 },
    is_draft: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export interface IBlog extends Document {
  title: string;
  content: string;
  author: IUser["_id"];
  views: number;
  is_draft: boolean;
}

const BlogModel: Model<IBlog> = mongoose.model<IBlog>("Blog", blogSchema);

export default BlogModel;
