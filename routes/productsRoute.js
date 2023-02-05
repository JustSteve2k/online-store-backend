const express = require("express");

const productsController = require("../controllers/productsController");
const validateIdMiddleware = require("../middleware/validateIdMiddleware");
const { validate } = require("../models/productsModel");

const router = express.Router();

// Gets all products.
router.get("/", validateIdMiddleware, productsController.getProducts);

// Adds a new product
router.post("/", productsController.postNewProduct);

// Updates a product
router.patch("/", validateIdMiddleware, productsController.patchProduct);

// Removes a product
router.delete("/", validateIdMiddleware, productsController.deleteProduct);

// Gets all products
router.get("/all", productsController.getAllProducts);

// Gets a total count of all the products
router.get("/count", productsController.getProductCount);

router.get("/test1", async (req, res, next) => {
  console.log("test route 1");
  res.send("Test route 1 hit");
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
// Getting counts of products - Started
