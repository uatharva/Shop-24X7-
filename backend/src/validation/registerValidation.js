//name 2 to 30 chars
//email validaton
//password:min 6 max 10

const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";

  data.password = !isEmpty(data.password) ? data.password : "";

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";

  //for username
  if (!validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = "Name must be between 2 and 30 characters";
  }

  if (validator.isEmpty(data.username)) {
    errors.username = "Name field is required";
  }

  //for firstname
  
  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "first name should not be blank";
  }
  //for lastname
  
  if (validator.isEmpty(data.lastName)) {
    errors.lastName = "last name should not be blank";
  }
  //for password
  if (!validator.isLength(data.password, { min: 6, max: 10 })) {
    errors.password = "password must be at least 6 characters";
  }
  if (validator.isEmpty(data.password)) {
    
    errors.password = "Password should not be blank";
  }
  return{
      errors,
      isValid: isEmpty(errors),
  };

  
};
