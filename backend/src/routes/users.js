var express = require("express");
var router = express.Router();
var registerValidation = require("../validation/registerValidation");
var jwt = require("jsonwebtoken");
const secretKey = require("../config/keys").secretKey;

const User = require("../model/user");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//are we going to refer to the users model

// @end point : /api/v1/users/login
// @description : to login,
// @access public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username, password });

    if (!user) {
      return res.status(400).json({
        errors: [
          {
            status: "failure",
            message: "Invalid username or password",
          },
        ],
      });
    } else {
      const payload = {
        status: "success",
        message: "user logged in successfully.",
        _id: user._id,
        type: user.type,
        firstName: user.firstName,
        username: user.username,
      };

      jwt.sign(payload, secretKey, { expiresIn: 360000 }, (err, token) => {
        if (err) {
          throw err;
        } else {
          res.json({ token });
        }
      }); //expiresin has to be in seconds
      // return res.status(200).json({msg: "success"}); // to send the token
    }
  } catch (err) {}
});

// @end point : /api/v1/users/register
// @description : to create a new user and register them,
// @access public

router.post("/register", (req, res) => {
  const { errors, isValid } = registerValidation(req.body);

  if (!isValid) {
    return res.status(400).json({
      errors: [
        {
          status: "failure",
          message: "Unable to register, username already exists",
        },
      ],
    });
  }
  console.log(JSON.stringify(req.body)); //post method will keep the datsa in the body only

  //destructing
  // const { username, password, firstName, lastName } = req.body;

  //model object
  user = new User(req.body);
  //save method will create a new document with the provided details in mongodb

  user.save();
  //destructuring is having one step ^ nstead of three like below
  //name = req.body.name;
  //password = req/body.password;
  //email= req.body.email;
  //req.body.name
  //name
  //for this registeration do we need to collect the data and that data we will print it
  //collected data we will share it to mongoose to store it in the database
  res.json({ status: "success", message: "user created successfully" });
});

module.exports = router;
