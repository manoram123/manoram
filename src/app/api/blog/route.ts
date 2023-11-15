import BlogModel from "../mongodb/blogModel";
import connectToDatabase from "../mongodb/connect";

export async function POST(req: Request) {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    await connectToDatabase();
    const newOrder = new BlogModel();
    await newOrder.save();
    return Response.json(newOrder);
  } catch (error) {
    console.error("Failed to create draft blog:", error);
    return Response.json({ error: "Failed to create draft blog." });
  }
}
