import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  // req.method, req.body
  if (req.method !== "POST") return;

  const { title, image, description, details } = req.body;
  const slug = title.replace(" ", "-").toLowerCase();

  if (!title || !image || !description || !details) return;

  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.fn0je.mongodb.net/nextjs-tailwind?retryWrites=true&w=majority"
  );

  const db = client.db();
  const postCollection = db.collection("posts");
  const result = await postCollection.insertOne({
    title,
    image,
    description,
    details,
    slug,
  });

  client.close();

  res.status(201).json({ post: result, message: "Post created" });
}
