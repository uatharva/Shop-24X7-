var express = require("express");
//var router= express.Router();
var app = express(); // creating express server instance we can use this or the above router line

// connect to mongo db connection
const connectDB = require("./src/config/connectDB");
var mongoose = require("mongoose");

const Product = require("./src/model/products");

//to handle the paths
const path = require("path");

connectDB();

//all requests and responses mostly will use json format for exchanging the data
app.use(express.json({ extented: false }));

//this application will only use json format for exchaning the data objects
//http methods
//get: to retrieve the data
//post: to create a new data object
//put: to update the data object
//delete: to delete the data object

//current user
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
}
//router spec
const users = require("./src/routes/users");

const products = require("./src/routes/products");

const index = require("./src/routes/index");

const admin = require("./src/routes/admin");

const profile = require("./src/routes/profile");

const checkout = require("./src/routes/checkout");

const orders = require("./src/routes/orders");

app.get("/test", function (req, res) {
  res.json({ data: "success" });
});

app.use("/api/v1/users", users);
app.use("/api/v1/products", products);
app.use("/api/v1/orders", orders);
app.use("/api/v1/profile", profile);
app.use("/api/v1/checkout", checkout);
app.use("/api/v1/admin", admin);
app.use("/api/v1/index", index);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
module.exports = app;
