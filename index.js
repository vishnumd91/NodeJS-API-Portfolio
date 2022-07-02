const path = require("path");

const express = require("express");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

const cors = require("cors");

const mongoose = require("mongoose");

const experienceRoutes = require("./routes/experienceRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use(cors());

app.use(express.json());

app.use("/portfolio", experienceRoutes);

app.use("/profile", profileRoutes);

app.use("/", (req, res) => {
  res.send("Hello, Welcome to Portfolio API");
});

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    mongoose.connection.once("open", () => {
      console.log("MongoDB Connected Succesfully");
    })
  );
