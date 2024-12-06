const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
