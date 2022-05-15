const express = require("express");
const {
  getProfileData,
  addProfileData,
} = require("../controllers/profileController");

const router = express.Router();

router.get("/profile", getProfileData);

router.post("/profile", addProfileData);

module.exports = router;
