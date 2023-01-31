const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  item: String,
  cost: Number,
  categories: String,
});

module.exports = mongoose.model("Product", productSchema);
