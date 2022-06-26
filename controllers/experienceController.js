const ExperienceData = require("../models/experience");

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

const getExperienceDataById = async (req, res) => {
  try {
    const experienceData = await ExperienceData.findById(req.params.id);

    res.status(200).json(experienceData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getExperienceData = async (req, res) => {
  try {
    const experienceData = await ExperienceData.find();

    res.status(200).json(experienceData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateExperienceData = async (req, res) => {
  try {
    const experienceData = await ExperienceData.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // $set is a mongoose operator
      { new: true } // This will return the updated document
    );

    res.status(200).json(experienceData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteExperienceData = async (req, res) => {
  try {
    const experienceData = await ExperienceData.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json("Data has been deleted");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  addExperienceData,
  getExperienceDataById,
  getExperienceData,
  updateExperienceData,
  deleteExperienceData,
};
