import dotenv from "dotenv";
dotenv.config();

function handleError(err, req, res, next) {
  // Basic
  //   res.status(err.status).json({
  //     message: err.message,
  //     stack: err.stack, // Locating the error
  //   });

  //   How it is used in Production
  const response = {
    message: err.message,
  };

  if (process.env.NODE_ENVIORNMENT === "development") {
    response.stack = err.stack;
  }

  res.status(err.status).json(response);
}

export default handleError;
