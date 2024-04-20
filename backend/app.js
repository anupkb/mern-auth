const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 3001;
const mongo_uri = process.env.MONGOOSE_URI;

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
