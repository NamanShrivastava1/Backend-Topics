export default function registerUser(req, res, next) {
  try {
    // throw new Error("User Already Exists");
    console.log(user)
  } catch (err) {
    err.status = 500;
    next(err);
  }
}
