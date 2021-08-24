var express = require('express');
var router = express.Router();

var Products = require('../model/products');
var User = require('../model/user');

// @end point : /api/v1/homepage/banner
// @description : to return the list of banner images to be shown based on the last 3 added products
// @access public

router.get('/banner', (req, res, next) => {
    Products.find((err,products)=>{
        if (err) { return next(err); }
        var result={
            "status": "success",
            "products":  req.body.image, products: req.body.name
        }
    res.send(result);
    })
});

// @end point : /api/v1/homepage/categories
// @description : to return the list of 3 randomly selected categories
// @access public

router.get('/catergories', (req, res, next) => {
    Products.find((err,categories) => {
        if (err) { return next(err); }
        var result={
            "status": "success",
            "categories": categories
        }
    res.send(result);
    })
});

// @end point : /api/v1/homepage/products
// @description : to return the list of 8 randomly products categories
// @access public

router.get('/', (req, res, next) => {
    Products.find((err,products)=>{
        if (err) { return next(err); }
        var result={
            "status": "success",
            "message": products
        }
    res.send(result);
    })
});

module.exports = router;