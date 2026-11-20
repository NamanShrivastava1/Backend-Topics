import { Worker } from "bullmq";
import { connection } from "./redis.js";

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Processing job ${job.id} for ${job.data.to}...`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { sentTo: job.data.to };
  },
  { connection, concurrency: 5 },
);

worker.on("completed", (job, result) => {
  console.log(`Completed job ${job.id}:`, result);
});

worker.on("failed", (job, err) => {
  console.error(`Failed job ${job?.id}:`, err.message);
});
