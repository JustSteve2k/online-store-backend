const express = require("express");

const router = express.Router();

// Gets all products.
router.get("/", (req, res, next) => {
  console.log("Someone reached the base products route.");
  res.send("Welcome to the products route!");
});

// Gets an item by id provided.
// Request will look like this - localhost:5000/products/newitem?id=testParam
router.get("/newitem", (req, res, next) => {
  let productID = req.query.id;
  res.send(`You are searching for product - ${productID}`);
});

// Example using params
// Request will look like this - localhost:5000/products/tester/hmm
router.get("/tester/:id", (req, res, next) => {
  let id = req.params.id;

  res.send(`You send the id param - ${id}`);
});

// Adds a new product
router.post("/item", (req, res, next) => {
  res.send("This is the route for adding a new product.");
});

// Removes a product
router.delete("/item", (req, res, next) => {
  res.send("this is the route for removing a product");
});

// Updates a product
router.patch("/item", (req, res, next) => {
  res.send("This is the route for updating a product.");
});

// Deletes a product
router.delete("/item", (req, res, next) => {
  res.send("This is the route for deleting a product.");
});

// Leftover route.
router.use("/", (req, res, next) => {
  res.status(404).send("someone is lost in the products route!");
});

module.exports = router;

// ::: Need routes for :::
// Getting a list of all products
// Gets a specific product info
// Adding a product - Started
// Removing a product - Started
// Updating a product - Started
// Deleting a product - Started
