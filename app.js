const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/main", (req, res, next) => {
  res.send("you've reached the main page!");
});

app.use("/", (req, res, next) => {
  console.log("someone is lost");
  res.status(404).send("you must be lost!");
});

app.listen(port);
console.log(`app now listening on port ${port}`);
