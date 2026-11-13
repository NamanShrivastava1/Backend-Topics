import express from "express";
import mongoose from "mongoose";

const app = express();

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongo_basic");
    console.log("Connected To DB!");
  } catch (error) {
    console.log("DB Error", error);
  }
})();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const userModel = mongoose.model("users", userSchema);

app.get("/search", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      const allUsers = await userModel.find();
      return res.status(200).json(allUsers);
    }

    const users = await userModel.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Search failed", error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
