const path = require("path");

const express = require("express");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

const cors = require("cors");

const mongoose = require("mongoose");

const experienceRoutes = require("./routes/experienceRoutes");

app.use(cors());

app.use(express.json());

// express.static(path.join(__dirname, '../public'))

app.use("/portfolio", experienceRoutes);

app.use("/", (req, res) => {
  res.send("Hello, Welcome to Portfolio API");
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
