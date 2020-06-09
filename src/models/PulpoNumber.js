const PulpoType = require("./PulpoType");
const { pulpoError } = require("../functions");
const { isNumber } = require("../utils");

class PulpoNumber extends PulpoType {
  constructor(opts = {}) {
    super();
    this.addValidator([this.isCorrectType, pulpoError("notANumber")]);
  }

  isCorrectType(val) {
    return isNumber(val);
  }

  min(minVal) {
    this.addValidator([val => val >= minVal, pulpoError("numberMin", minVal)]);
    return this;
  }

  max(maxVal) {
    this.addValidator([val => val <= maxVal, pulpoError("numberMax", maxVal)]);
    return this;
  }

  integer() {
    this.addValidator([val => Number.isInteger(val), pulpoError("numberInteger")]);
    return this;
  }

  float() {
    this.addValidator([val => !Number.isInteger(val), pulpoError("numberFloat")]);
    return this;
  }
}

module.exports = PulpoNumber;
