// middleware/auth.js

const authenticate = (req, res, next) => {
  // Example: Check if user is authenticated
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }
  next();
};

module.exports = authenticate;
