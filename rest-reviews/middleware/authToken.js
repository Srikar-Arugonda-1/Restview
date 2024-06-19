const jwt = require("jsonwebtoken");
require("dotenv").config({
  override: true,
  path: "../.env",
});

const authToken = (req, res, next) => {
  const tok = req.header("Authorization");
  // Extract the token from the Authorization header, assuming it follows the format "Bearer <token>"
  const token = tok ? tok.split(' ')[1] : null;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Token is not valid" });
  }
};

module.exports = authToken;
