const express = require("express");
const {
  getExperienceData,
  addExperienceData,
  getExperienceDataById,
  updateExperienceData,
  deleteExperienceData,
} = require("../controllers/experienceController");

const router = express.Router();

router.post("/experience", addExperienceData);

router.get("/experience/:id", getExperienceDataById);

router.get("/experience", getExperienceData);

router.put("/experience/:id", updateExperienceData);

router.delete("/experience/:id", deleteExperienceData);

module.exports = router;
