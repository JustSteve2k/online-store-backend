const express = require("express");

const productsController = require("../controllers/productsController");

const router = express.Router();

// Gets all products.
router.get("/", productsController.getProducts);

// Adds a new product
router.post("/", productsController.postNewProduct);

// Updates a product
router.patch("/", productsController.patchProduct);

// Removes a product
router.delete("/", productsController.deleteProduct);

// Gets a total count of all the products
router.get("/count", productsController.getProductCount);

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
// Getting counts of products - Started
