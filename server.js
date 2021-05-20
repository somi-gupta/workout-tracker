const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  