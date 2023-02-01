const bodyParser = require("body-parser");
const Product = require("../models/productsModel");

exports.getProducts = async (req, res, next) => {
  //console.log("Someone reached the base products route.");
  let id = req.query.id;

  const result = await Product.findOne({ id: id });

  if (result === null) res.send(`ID ${id} was not found`);
  else res.send(result);
};

exports.postNewProduct = async (req, res, next) => {
  //console.log("Someone reached the add products route.");
  const { item, id, cost, categories } = req.body;

  let product = { id: id, item: item, cost: cost, categories: categories };

  //   const result = await Product.create(product, (err, small) => {
  //     if (err) return handleError(err);
  //     console.log(`New item created with an id of - ${small._id}`);
  //   });

  const result = await Product.create(product);

  console.log(result);

  res.send(`Item succssfully added to database with an _id of ${result._id}!`);
};

exports.patchProduct = async (req, res, next) => {
  //console.log("Someone reached the patch products route.");
  res.send("This is the route for updating a product.");
};

exports.deleteProduct = async (req, res, next) => {
  //console.log("Someone reached the delete products route.");
  let id = req.query.id;

  const result = await Product.deleteMany({ id: id });
  console.log(result);

  res.send(`Deleted ${result.deletedCount} entries with an id of ${id}`);
};

exports.getProductCount = async (req, res, next) => {
  //console.log("Someone reached the count products route.");
  res.send("This route gets the total count of products in the database.");
};
