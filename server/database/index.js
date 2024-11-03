const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const URI = process.env.MongoDBURI;

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB Connection Successfull"))
  .catch((error) => console.log(`Error occured: ${error}`));
