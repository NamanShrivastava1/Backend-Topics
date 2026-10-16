const express = require("express");
const multer = require("multer");
const postModel = require("./models/post.model");
const uploadFile = require("./services/storage.service");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer, req.file.originalname);

  const post = postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "Post created successfully",
    post,
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  return res.status(200).json({ message: "Posts fetched successfully", posts });
});

module.exports = app;
