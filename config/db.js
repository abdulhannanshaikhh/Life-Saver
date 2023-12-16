const mongoose = require("mongoose");
const colors=require('colors');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.group(`Connected to MongoDb Databse ${mongoose.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports=connectDB;
