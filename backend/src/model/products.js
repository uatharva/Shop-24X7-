const mongoose = require("mongoose");
//schema for the products
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  // _id: {
  //   type: String,
  // },
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  sold: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default: "https://via.placeholder.com/1920x1080",
  },
  department: {
    type: String,
  },
  discountPrice: {
    type: Number,
  },
  createdOn: {
    type: Date,
    Default: Date.now(),
  },
  isTopProduct: {
    type: Boolean,
    default: false,
  },
});

module.exports = products = mongoose.model("Products", productsSchema);
