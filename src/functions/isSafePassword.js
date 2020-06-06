const { regularExpressions } = require("../config");

const isSafePassword = (val, type) => {
  if (!regularExpressions.passwordRegex[type]) return false;
  return regularExpressions.passwordRegex[type].test(val);
};

module.exports = isSafePassword;
