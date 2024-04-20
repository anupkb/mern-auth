const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const port = process.env.PORT || 3001;

const router = require("./routes/userRoutes");
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});
