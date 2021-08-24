const mongoose = require('mongoose');
//schema for the products
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  userid: {
    type: String
  },
  username: {
    type: String
  },
  ordersum: {
    type: Number
  },
  orderPlacedOn: {
    type: Date, default: Date.now()
  },
  isDelivered: {
    type: Boolean, default: false
  },
  orderDeliveredOn: {
    type: Date, default: Date.now()
  },
  cart:[]
});

module.exports = orders = mongoose.model("Orders", ordersSchema);