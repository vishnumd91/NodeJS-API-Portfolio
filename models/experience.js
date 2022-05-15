const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    state: String,
    country: String,
    description: String,
    isCurrent: Boolean,
    startDate: Date,
    endDate: Date,
    // projects: [],
  },
  { timestamps: true }
);

const ExperienceData = mongoose.model("ExperienceData", experienceSchema);

module.exports = ExperienceData;
