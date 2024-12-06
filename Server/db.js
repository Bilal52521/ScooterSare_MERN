const mongoose = require("mongoose");
const URL = `mongodb+srv://blogadminphi:blogadminphi@blogadminphi.jo0wx.mongodb.net/blogadminphi?retryWrites=true&w=majority&appName=BlogadminPhi`;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("DB Connection Successfuly");
  } catch (error) {
    console.error("Database error:", error);
  }
};

module.exports = connectDB;
