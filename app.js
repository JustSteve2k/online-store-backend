const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const productRoutes = require("./routes/productsRoute");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/main", (req, res, next) => {
  res.send("you've reached the main page of products api!");
});

app.use("/products", productRoutes);

app.use("/", (req, res, next) => {
  console.log("someone is lost");
  res.status(404).send("you must be lost!");
});

app.listen(port);
console.log(`app now listening on port ${port}`);
