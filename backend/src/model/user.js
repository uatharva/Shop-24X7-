const mongoose = require('mongoose');
//schema for the products
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String
  },
  profileimage: {
    type: String,
    default: "https://via.placeholder.com/150"
  },
  address: {
    type: String, default: ""
  },
  type: {
    type: String, default: "user"
  }
});

module.exports = user = mongoose.model("User", userSchema);