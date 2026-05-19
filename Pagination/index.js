import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
});

const userModel = mongoose.model("user", userSchema);

await mongoose
  .connect("mongodb://127.0.0.1:27017/paginationDB")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("DB Error: ", error);
  });

app.post("/users", async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      return res.status(400).json({ error: "username and email are required" });
    }

    const user = await userModel.create({ username, email });
    return res.status(201).json({
      message: "User Created",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Unable to create user" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 10;
    const totalUsers = await userModel.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);
    const nextPage = page < totalPages ? page + 1 : null;

    const users = await userModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return res.json({
      message: "User fetched successfully.",
      success: true,
      page,
      totalPages,
      nextPage,
      users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Unable to fetch users" });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
