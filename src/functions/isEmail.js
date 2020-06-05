const { regularExpressions } = require("../config");

const isEmail = val => {
  return val.match(regularExpressions.emailRegex);
};

module.exports = isEmail;
