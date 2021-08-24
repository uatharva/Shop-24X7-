var express = require("express");
var router = express.Router();

var Products = require("../model/products");
var User = require("../model/user");

// @end point : /api/v1/products
// @description : to return the list of products,
// @access public

router.get("/", (req, res, next) => {
  Products.find((err, products) => {
    if (err) {
      return next(err);
    }
    var result = {
      products,
    };
    // console.log(JSON.stringify(result));
    res.send(result);
  });
});

// @end point : /api/v1/products/:PRODUCT_ID
// @description : to return the details for the selected products
// @access public

router.get("/:id", (req, res, next) => {
  Products.findById(req.params.id, (err, product) => {
    if (err) {
      return next(err);
    }
    var result = {
      product,
    };
    res.send(result);
  });
  // Products.findById(req.params.id).then((t) => {
  //   if (t != null) {
  //     res.send(t);
  //   } else {
  //     var result = {
  //       status: "nothing found",
  //     };
  //     res.send(result);
  //   }
  // });
});
module.exports = router;
