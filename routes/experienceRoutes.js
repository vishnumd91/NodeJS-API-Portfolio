const express = require("express");
const {
  getExperienceData,
  addExperienceData,
} = require("../controllers/experienceController");

const router = express.Router();

router.get("/experience", getExperienceData);

router.post("/experience", addExperienceData);

module.exports = router;
