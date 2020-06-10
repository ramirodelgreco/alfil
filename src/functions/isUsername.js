const { regularExpressions } = require("../config");

const isUsername = val => {
  return regularExpressions.usernameRegex.test(val);
};

module.exports = isUsername;
