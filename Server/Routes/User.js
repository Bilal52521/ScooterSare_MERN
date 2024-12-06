const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

const secritKey = "AMSKDJFJ224MDK30asd2fA";

// User Signup Route
router.post(
  "/adduser",
  body("email").isEmail(),
  body("password", "Incorrect Password").isLength({ min: 4 }),
  body("name").isLength({ min: 4 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "Email already exists" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        location: req.body.location,
      });

      res.status(201).json({
        success: true,
        message: "User created successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

// User Login Route
router.post(
  "/login",
  body("email").isEmail().withMessage("Please enter a valid Email"),
  body("password", "Incorrect Password").isLength({ min: 4 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      // Find user by email
      const userData = await User.findOne({ email });

      if (!userData) {
        return res.status(400).json({
          success: false,
          message: "Try logging in with correct credentials",
        });
      }

      const pssword = await bcrypt.compare(password, userData.password);

      if (!pssword) {
        return res.status(400).json({
          success: false,
          message: "Try logging in with correct credentials",
        });
      }

      const dataDB = {
        id: userData.id,
      };

      const token = jwt.sign(dataDB, secritKey);

      return res.status(200).json({
        success: true,
        authToken: token,
        message: "User logged in successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

module.exports = router;
