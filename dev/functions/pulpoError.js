const { errors } = require("../config");

const pulpoError = (errorType) => {
  return errors[errorType];
};

module.exports = pulpoError;
