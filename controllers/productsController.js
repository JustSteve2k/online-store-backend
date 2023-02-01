const bodyParser = require("body-parser");
const Product = require("../models/productsModel");

exports.getProducts = async (req, res, next) => {
  //console.log("Someone reached the base products route.");
  let id = req.query.id;
  let statusCode = 404;
  let message = "Test";
  let result = "";

  id = parseInt(id);

  //res.send(`${id} is a data type of ${typeof id}`);

  if (isNaN(id)) {
    console.log("nope its not a number");
    message = "Error, need to submit a number in the ID slot.";
  } else {
    console.log("yep its number");
    result = await Product.findOne({ id: id });
    statusCode = 200;
  }

  console.log(result);

  if (result === null && statusCode === 200) {
    message = `ID ${id} was not found in the database`;
    statusCode = 404;
  }

  statusCode === 200 ? res.status(statusCode).send(result) : res.status(statusCode).send(message);
};

exports.postNewProduct = async (req, res, next) => {
  //console.log("Someone reached the add products route.");
  const { item, id, cost, categories, imgUrl, quantity } = req.body;

  let product = { id: id, item: item, cost: cost, categories: categories, imgUrl: imgUrl, quantity: quantity };

  const result = await Product.create(product);

  console.log(result);

  res.send(`Item succssfully added to database with an _id of ${result._id}!`);
};

exports.patchProduct = async (req, res, next) => {
  //console.log("Someone reached the patch products route.");
  let id = req.query.id;
  let result = await Product.findOne({ id: id });

  console.log(req.body.item);
  if (req.body.item !== undefined) result.item = req.body.item;
  if (req.body.cost !== undefined) result.cost = req.body.cost;
  if (req.body.categories !== undefined) result.categories = req.body.categories;
  if (req.body.imgUrl !== undefined) result.imgUrl = req.body.imgUrl;
  if (req.body.quantity !== undefined) result.quantity = req.body.quantity;

  const updatedResult = await Product.findOneAndUpdate(
    { id: result.id },
    {
      id: result.id,
      item: result.item,
      cost: result.cost,
      categories: result.categories,
      imgUrl: result.imgUrl,
      quantity: result.quantity,
    }
  );

  res.send("This is the route for updating a product.");
};

exports.deleteProduct = async (req, res, next) => {
  //console.log("Someone reached the delete products route.");
  let id = req.query.id;

  const result = await Product.deleteMany({ id: id });
  console.log(result);

  res.send(`Deleted ${result.deletedCount} entries.`);
};

exports.getProductCount = async (req, res, next) => {
  //console.log("Someone reached the count products route.");
  let results = "";

  if (req.query.categories === undefined || req.query.categories === "all") results = await Product.countDocuments();
  else results = await Product.countDocuments({ categories: req.query.categories });

  console.log(results);

  res.send(`A total of ${results} entries were found in the product database.`);
};
