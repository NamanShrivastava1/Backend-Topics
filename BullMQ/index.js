import express from "express";
import { emailQueue } from "./queue.js";

const app = express();
app.use(express.json());

// To Run:
// node index.js
// node worker.js

app.post("/send-email", async (req, res) => {
  const { to, subject, body } = req.body;

  if (!to || !subject) {
    return res.status(400).json({ error: "to and subject are required" });
  }

  const job = await emailQueue.add("send-email", { to, subject, body });

  res.status(202).json({
    message: "Email job queued",
    jobId: job.id,
  });
});

app.listen(3000, () => {
  console.log("Express server running on http://localhost:3000");
});
