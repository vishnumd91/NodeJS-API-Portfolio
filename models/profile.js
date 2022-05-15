const mongoose = require("mongoose");

const socialMediaSchema = new mongoose.Schema({
  name: String,
  link: String,
});

const profileSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number,
    address: String,
    city: String,
    state: String,
    zip: Number,
    bio: String,
    socialMedia: [socialMediaSchema],
  },
  { timestamps: true }
);

const ProfileData = mongoose.model("Profile", profileSchema);

module.exports = ProfileData;
