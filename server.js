const express = require("express");
const mongoose = require("mongoose");
const routes = require('./controllers');

const PORT = process.env.PORT || 3001
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  