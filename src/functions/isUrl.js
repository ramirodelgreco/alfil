const { regularExpressions } = require("../config");

const isUrl = val => {
  return regularExpressions.usernameRegex.test(val);
};

module.exports = isUrl;
