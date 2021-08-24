var express = require("express");
var router = express.Router();

var Products = require("../model/products");
var User = require("../model/user");
var Orders = require("../model/orders");

// @end point : /api/v1/orders/
// @description : to get orders for logged inusers or all orders for admin users
// @access public
router.get("/", (req, res, next) => {
  Orders.find((err, orders) => {
    if (err) {
      return next(err);
    }
    var result = {
      orders,
    };
    res.send(result);
  });
});

// @end point : /api/v1/orders/:id
// @description : to allow admin users to modify order
// @access public

router.post("/:id", (req, res, next) => {
  Orders.findByIdAndUpdate(
    req.params.id,
    { isDelivered: req.body.isDelivered },
    (err) => {
      if (err) {
        var result = {
          status: "failure",
          message: "cant update product details.",
        };
        return res.send(result);
      }
      var result = {
        status: "success",
        message: "order modified successfully.",
      };
      res.send(result);
    }
  );
});

// @end point : /api/v1/orders/:id
// @description : to allow admin users to delete orders
// @access public

router.delete("/:id", (req, res) => {
  Orders.findById(req.params.id, (err, order) => {
    if (err) {
      var result = {
        status: "failure",
        message: "cant delete this product.",
      };
      return res.send(result);
    }
    if (!order)
      return res.status(404).send("Order does not exist with this order id.");
  });
  Orders.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      var result = {
        status: "failure",
        message: "cant delete product.",
      };
      return res.send(result);
    }
    var result = {
      status: "success",
      message: "order deleted successfully.",
    };
    return res.send(result);
  });
});

module.exports = router;
