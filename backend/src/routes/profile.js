var express = require("express");
var router = express.Router();

var User = require("../model/user");

// @end point : /api/v1/profile
// @description : to return the profile by id
// @access public

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err);
    }
    var result = {
      user,
    };
    res.send(result);
  });
});

// @end point : /api/v1/profile/image
// @description : to deletes image by id
// @access public
router.delete("/image/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { profileimage: "" }, (err) => {
    if (err) {
      return next(err);
    }
    var result = {
      status: "success",
      message: "profile image deleted successfully.",
    };
    res.send(result);
  });
});

// @end point : /api/v1/profile/image
// @description : to uodate the profile image by id
// @access public
router.post("/image/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { profileimage: req.body.profileimage },
    (err) => {
      if (err) {
        var result = {
          status: "success",
          message: "profile image updated successfully.",
        };
        return res.send(result);
      }
      var result = {
        status: "success",
        message: "profile image updated successfully.",
      };
      return res.send(result);
    }
  );
});

// @end point : /api/v1/profile/address
// @description : to updates the address by id
// @access public

router.post("/address/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { address: req.body.address },
    (err) => {
      if (err) {
        return next(err);
      }
      var result = {
        status: "success",
        message: "profile modified successfully.",
      };
      res.send(result);
    }
  );
});

module.exports = router;
