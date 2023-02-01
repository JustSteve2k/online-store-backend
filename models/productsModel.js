const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  item: String,
  cost: Number,
  categories: String,
  imgUrl: String,
  quantity: Number,
});

module.exports = mongoose.model("Product", productSchema);
