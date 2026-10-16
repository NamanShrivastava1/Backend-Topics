// In Import we can use .env variable only where we have config it.
// import dotenv from "dotenv"
// dotenv.config();
import express from "express";

const app = express();

import handleError from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";

app.use("/api/auth", authRoutes);

app.use(handleError);

export default app;
