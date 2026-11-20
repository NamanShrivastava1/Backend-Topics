import cron from "node-cron";

import cron from "node-cron";

// Run every minute
cron.schedule("* * * * *", () => {
  console.log("Running a task every minute");
});

// Run every 30 minutes (at minute 0 and 30)
cron.schedule("*/30 * * * *", () => {
  console.log("Running every 30 minutes");
});

// Run every 5 seconds (using the optional 6th field)
cron.schedule("*/5 * * * * *", () => {
  console.log("Running every 5 seconds");
});

// Run every day at 5:03 AM
cron.schedule("3 5 * * *", () => {
  console.log("Running daily at 5:03 AM");
});

// Run every Friday at 4:00 PM
cron.schedule("0 16 * * friday", () => {
  console.log("Running every Friday at 4:00 PM");
});

// Run every minute between 12:00 PM and 12:30 PM, Monday through Friday
cron.schedule("0-30 12 * * MON-FRI", () => {
  console.log("Weekday lunch check");
});
