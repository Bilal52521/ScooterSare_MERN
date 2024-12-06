const express = require("express");
const { body, validationResult } = require("express-validator");
const Blog = require("../models/Blogs");
const router = express.Router();

// Get All Blogs Route
router.get("/blogs", async (req, res) => {
  try {
    // Find all blogs in the collection
    const blogs = await Blog.find();

    if (blogs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No blogs found" });
    }

    res.status(200).json({ success: true, blogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/blogs/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Blog.findById(postId);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    res.status(200).json({ success: true, post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Create Blog Route
router.post(
  "/newblog",
  [
    body("title", "Title is required").notEmpty(),
    body("description", "Description is required").notEmpty(),
    body("content", "Content is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newBlog = await Blog.create({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img || [],
        content: req.body.content,
      });

      res.status(201).json({ success: true, blog: newBlog });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

// Update Blog Route
router.put(
  "/updateblog/:id",
  [
    body("title", "Title is required").notEmpty(),
    body("description", "Description is required").notEmpty(),
    body("content", "Content is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const updateBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          description: req.body.description,
          content: req.body.content,
          img: req.body.img || [],
        },
        { new: true }
      );

      if (!updateBlog) {
        return res
          .status(404)
          .json({ success: false, message: "Blog not found" });
      }

      res.status(200).json({ success: true, blog: updateBlog });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

// Delete Blog Route
router.delete("/deleteblog/:id", async (req, res) => {
  try {
    const deleteData = await Blog.findByIdAndDelete(req.params.id);

    if (!deleteData) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
