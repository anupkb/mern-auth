const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const connectDB = require("./db/connect");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 3001;
const mongo_uri = process.env.MONGOOSE_URI;

const allowCors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:1234");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cookieParser());
app.use(allowCors);
const router = require("./routes/userRoutes");
app.use(express.json());
app.use(router);

const start = async () => {
  try {
    await connectDB(mongo_uri);
    console.log(`Successfully Connected to MongoDB@ ${mongo_uri}`);

    app.listen(port, () => {
      console.log(`Server Running on Port: ${port}...`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
start();
