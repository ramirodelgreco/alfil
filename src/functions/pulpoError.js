const { errorMessages } = require("../config");

const pulpoError = (errorType, val) => {
  if (!(errorMessages[errorType] instanceof Function)) {
    return errorMessages[errorType];
  }
  return errorMessages[errorType](val);
};

module.exports = pulpoError;
