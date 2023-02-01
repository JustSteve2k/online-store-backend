const mongoose = require("mongoose");
const colors = require("colors");
const credentials = require("./db.config");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);

    const URI = `mongodb+srv://${credentials.user}:${credentials.password}@${credentials.cluster}?retryWrites=true&w=majority`;
    const conn = await mongoose.connect(URI);

    console.log(`MongoDB Connected ${conn.connection.host}`.underline.blue);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
