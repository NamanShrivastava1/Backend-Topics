const express = require("express");

const songRoutes = require("./routes/song.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/songs", songRoutes);

module.exports = app;
