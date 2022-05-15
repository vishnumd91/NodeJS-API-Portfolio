const ProfileData = require("../models/profile");

const getProfileData = async (req, res) => {
  try {
    const ProfileData = await ProfileData.find();

    res.status(200).json(ProfileData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addProfileData = async (req, res) => {
  const item = req.body;

  const newPost = new ProfileData(item);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getProfileData,
  addProfileData,
};
