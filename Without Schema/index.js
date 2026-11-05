import express from "express";
import { MongoClient } from "mongodb";

const app = express();

// Connection URL for your local MongoDB instance
const url = "mongodb://localhost:27017/mongo_basic";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();

    // Connect to your existing local database
    const db = client.db("mongo_basic");

    // Pick any collection name (MongoDB creates it dynamically if it doesn't exist)
    const collection = db.collection("my_flexible_data");

    // Insert any unstructured or semi-structured JavaScript object directly
    const result = await collection.insertOne({
      name: "Laptop User",
      status: "Active",
      randomField: "No model needed!",
      timestamp: new Date(),
    });

    console.log(`Document inserted with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
