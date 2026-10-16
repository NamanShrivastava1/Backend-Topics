const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/imagekit")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error connecting to DB", err);
    });
};

module.exports = connectToDb;