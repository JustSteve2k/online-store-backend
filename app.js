const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

connectDB();

const port = process.env.PORT || 5000;

const productRoutes = require("./routes/productsRoute");
//app.options("*", cors());
//app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.options("/*", (_, res) => {
  res.sendStatus(200);
});

app.get("/main", (req, res, next) => {
  res.status(200).send({ response: "you've reached the main page of products api!" });
});

app.use("/products", productRoutes);

app.use("/", (req, res, next) => {
  console.log("someone is lost");
  res.status(404).send("you must be lost!");
});

app.use(errorHandler);

app.listen(port);
console.log(`app now listening on port ${port}`);
