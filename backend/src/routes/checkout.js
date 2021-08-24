var express = require("express");
var router = express.Router();

var Products = require("../model/products");
var User = require("../model/user");
var Orders = require("../model/orders");

// @end point : /api/v1/checkout
// @description : to place a new order using logged in or guest user with email, password, first name and last name
// @access public
router.post("/", (req, res, next) => {
  var order = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    username: req.body.username,
    cart: req.body.cart,
  };
  Orders.create(order, (err) => {
    if (err) {
      var result = {
        status: "failure",
        message: "can't add order.",
      };
      return res.send(result);
    }
    var result = {
      status: "success",
      message: "Order placed successfully.",
    };
    return res.send(result);
  });
});

module.exports = router;
