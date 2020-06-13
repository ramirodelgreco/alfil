const { regularExpressions } = require("../config");

const isUrl = (val, type) => {
  if (!regularExpressions.urlRegex[type]) return false;
  return regularExpressions.urlRegex[type].test(val);
};

module.exports = isUrl;
