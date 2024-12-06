const express = require("express");
const { body, validationResult } = require("express-validator");
const Job = require("../models/Jobs");
const router = express.Router();

// Get All Routers
router.get("/jobs", async (req, res) => {
  try {
    // Find all jobs in the collection
    const jobs = await Job.find();

    if (jobs.length === 0) {
      return res.status(404).json({ success: false, message: "No jobs found" });
    }

    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Create Router
router.post(
  "/newjob",
  [
    body("title", "Title is required").notEmpty(),
    body("description", "Description is required").notEmpty(),
    body("location", "Location is required").notEmpty(),
    body("companyName", "Company name is required").notEmpty(),
  ],
  async (req, res) => {
    // Validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Create a new job using the request body
      const newJob = await Job.create({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        companyName: req.body.companyName,
      });

      // Respond with the newly created job
      res.status(201).json({ success: true, job: newJob });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

// Update Router
router.put(
  "/updatejob/:id",
  [
    body("title", "Title is required").notEmpty(),
    body("description", "Description is required").notEmpty(),
    body("location", "Location is required").notEmpty(),
    body("companyName", "Company name is required").notEmpty(),
  ],
  async (req, res) => {
    // Validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Find and update the job by its ID
      const updateJob = await Job.findByIdAndUpdate(
        req.params.id, // The ID of the job to update
        {
          title: req.body.title,
          description: req.body.description,
          location: req.body.location,
          companyName: req.body.companyName,
        },
        { new: true } // Return the updated job document
      );

      // If no job was found
      if (!updateJob) {
        return res
          .status(404)
          .json({ success: false, message: "Job not found" });
      }

      // Respond with the updated job
      res.status(200).json({ success: true, job: updateJob });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

// Delete Router
router.delete("/deletejob/:id", async (req, res) => {
  try {
    const deleteData = await Job.findByIdAndDelete(req.params.id);

    if (!deleteData) {
      res.status(400).json({
        success: false,
        message: "Job not found",
      });
    }

    res
      .status(200)
      .json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
