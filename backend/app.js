const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const port = process.env.PORT || 3001;

app.listen(() => {
  console.log(`Server running on: ${port}`);
});
