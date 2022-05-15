const ExperienceData = require("../models/experience");

const getExperienceData = async (req, res) => {
  try {
    const experienceData = await ExperienceData.find();

    res.status(200).json(experienceData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addExperienceData = async (req, res) => {
  const item = req.body;

  const newPost = new ExperienceData(item);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getExperienceData,
  addExperienceData,
};
