// If you are already using Mongoose in your project but want to skip defining a structured schema,
// you can pass an empty object {} as the schema.
// By setting strict: false, Mongoose will let you save whatever fields you want:
const mongoose = require("mongoose");

// Create a model tied to an empty, non-strict schema
const FlexibleModel = mongoose.model(
  "Flexible",
  new mongoose.Schema({}, { strict: false }),
  "your_collection_name",
);

// Save arbitrary data
await FlexibleModel.create({
  anyKey: "anyValue",
  nested: { data: 123 },
});
