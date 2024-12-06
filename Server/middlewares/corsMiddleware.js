const cors = require("cors");

const corsMiddleware = {
  origin: ["http://localhost:5174", "http://localhost:5175"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = cors(corsMiddleware);
