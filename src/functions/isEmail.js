const { regularExpressions } = require("../config");

const isEmail = val => {
  return regularExpressions.emailRegex.test(val);
};

module.exports = isEmail;
