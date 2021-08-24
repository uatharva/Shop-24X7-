var express = require("express");
var router = express.Router();

var Products = require("../model/products");
var User = require("../model/user");

// @end point : /api/v1/admin/products
// @description : to allow admin users to add new products
// @access public
router.post("/products", (req, res) => {
  var product = new Products(req.body);
  Products.create(product, (err) => {
    if (err) {
      var result = {
        status: "failure",
        message: "can't add product.",
      };
      return res.send(result);
    }
    var result = {
      status: "success",
      message: "product added successfully.",
    };
    res.send(result);
  });
});

// @end point : /api/v1/admin/products/:id
// @description : to allow admin users to delete products based on product id
// @access public
router.delete("/products/:id", (req, res) => {
  Products.findById(req.params.id, (err, product) => {
    if (err) {
      var result = {
        status: "failure",
        message: "can't delete product.",
      };
      return res.send(result);
    }
    if (!product)
      return res.status(404).send("Product does not exist with this Id");
  });
  Products.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      var result = {
        status: "failure",
        message: "cant delete product",
      };
      return res.send(result);
    }
    var result = {
      status: "success",
      message: "product deleted successfully",
    };
    res.send(result);
  });
});

// @end point : /api/v1/admin/products/:id
// @description : to allow admin users to edit products using product id and product info
// @access public
router.post("/products/:id", (req, res, next) => {
  var newproduct = {
    title: req.body.title,
    category: req.body.category,
    department: req.body.department,
    price: req.body.price,
    discountPrice: req.body.discountPrice,
    description: req.body.description,
    image: req.body.image,
    createdOn: Date.now(),
    isTopProduct: req.body.isTopProduct || false,
  };
  Products.findByIdAndUpdate(req.params.id, newproduct, (err) => {
    if (err) {
      var result = {
        status: "failure",
        message: "can't update product details.",
      };
      return res.send(result);
    }
    var result = {
      status: "success",
      message: "product edited successfully.",
    };
    res.send(result);
  });
});

module.exports = router;
