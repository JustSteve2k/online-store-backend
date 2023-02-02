const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  item: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    min: 0,
  },
  categories: String,
  imgUrl: String,
  quantity: {
    type: Number,
    min: 0,
    max: 9999,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
