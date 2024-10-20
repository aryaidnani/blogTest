const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { blogModel } = require("./db");
const app = express();

mongoose.connect(process.env.MONGODB_KEY);

app.get("/", async (req, res) => {
  console.log(`running 1`);
  const allBlogs = await blogModel.find();
  console.log(`running 2`);
  res.send(allBlogs);
});

// app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
