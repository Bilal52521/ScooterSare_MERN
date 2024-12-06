const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model("job", JobSchema);

module.exports = Job;
