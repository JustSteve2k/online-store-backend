const bodyParser = require("body-parser");
const asyncHandler = require("express-async-handler");

const Product = require("../models/productsModel");

exports.getProducts = asyncHandler(async (req, res, next) => {
  //console.log("Someone reached the base products route.");

  let id = parseInt(req.query.id);

  const result = await Product.findOne({ id: id });

  if (result === null) {
    res.status(404);
    throw new Error(`ID ${id} was not found in the database`);
  }

  res.status(200).send(result);
});

exports.postNewProduct = asyncHandler(async (req, res, next) => {
  //console.log("Someone reached the add products route.");
  const check = await Product.findOne({ id: req.body.id });

  if (check) {
    res.status(302);
    console.log("hmmmm");
    throw new Error("That product was already used, pick another id");
  }

  const { item, id, cost, categories, imgUrl, quantity, description } = req.body;

  let product = { id: id, item: item, cost: cost, categories: categories, imgUrl: imgUrl, quantity: quantity, description: description };

  const result = await Product.create(product);

  console.log(result);

  res.status(200).send({ response: `Item succssfully added to database with an _id of ${result._id}!` });
});

exports.patchProduct = asyncHandler(async (req, res, next) => {
  //console.log("Someone reached the patch products route.");

  let id = req.query.id;
  let result = await Product.findOne({ id: id });

  console.log(req.body.item);
  if (req.body.item !== undefined) result.item = req.body.item;
  if (req.body.cost !== undefined) result.cost = req.body.cost;
  if (req.body.categories !== undefined) result.categories = req.body.categories;
  if (req.body.imgUrl !== undefined) result.imgUrl = req.body.imgUrl;
  if (req.body.quantity !== undefined) result.quantity = req.body.quantity;
  if (req.body.description !== undefined) result.description = req.body.description || "not provided yet";

  const updatedResult = await Product.findOneAndUpdate(
    { id: result.id },
    {
      id: result.id,
      item: result.item,
      cost: result.cost,
      categories: result.categories,
      imgUrl: result.imgUrl,
      quantity: result.quantity,
      description: result.description,
    }
  );

  // res.status(200).send({ response: "This is the route for updating a product." });
  res.status(200).send({ response: `ID ${result._id} was updated successfully` });
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  //console.log("Someone reached the delete products route.");

  let id = req.query.id;

  const result = await Product.deleteMany({ id: id });
  console.log(result);

  res.status(200).send({ response: `Deleted ${result.deletedCount} entries.` });
});

exports.getProductCount = async (req, res, next) => {
  //console.log("Someone reached the count products route.");
  let results = "";

  if (req.query.categories === undefined || req.query.categories.trim() === "") req.query.categories = "all";

  if (req.query.categories === "all") results = await Product.countDocuments();
  else results = await Product.countDocuments({ categories: req.query.categories });

  console.log(results);

  res.status(200).send({ response: `A total of ${results} entries were found in the product database of type ${req.query.categories}.` });
};

exports.getAllProducts = asyncHandler(async (req, res) => {
  console.log("getting all products eventually");

  const results = await Product.find({});

  if (results.length === 0) {
    res.status(404);
    throw new Error("The database seems to be empty.  You should add some products!");
  }

  console.log(results);

  // res.status(200).send({ response: "You will eventually get all the products from this response." });
  res.status(200).send({ response: results });
});
