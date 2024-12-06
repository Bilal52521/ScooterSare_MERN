const jwt = require("jsonwebtoken");
const secritKey = "AMSKDJFJ224MDK30asd2fA";

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Access Denied. No Token Provided",
    });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access Denied. Malformed Token",
    });
  }

  try {
    const decoded = jwt.verify(token, secritKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Session expired. Please log in again.",
      });
    }
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
