const PulpoType = require("./PulpoType");
const { pulpoError } = require("../functions");
const { isNumber } = require("../utils");

class PulpoNumber extends PulpoType {
  constructor({ emptyValue = null } = {}) {
    super();
    this.addValidator([this.isCorrectType.bind(this), pulpoError("notANumber")]);
    this.isRequired = false;
    this.emptyValue = emptyValue;
  }

  isCorrectType(val) {
    if (this.isRequired || val !== this.emptyValue) return isNumber(val);
    return true;
  }

  required() {
    this.isRequired = true;
    this.addValidator([val => val !== this.emptyValue, pulpoError("requiredValue")]);
    return this;
  }

  min(minVal) {
    this.addValidator([
      this.generateValidatorFunction(val => val >= minVal),
      pulpoError("numberMin", minVal),
    ]);
    return this;
  }

  max(maxVal) {
    this.addValidator([
      this.generateValidatorFunction(val => val <= maxVal),
      pulpoError("numberMax", maxVal),
    ]);
    return this;
  }

  integer() {
    this.addValidator([
      this.generateValidatorFunction(val => Number.isInteger(val)),
      pulpoError("numberInteger"),
    ]);
    return this;
  }

  float() {
    this.addValidator([
      this.generateValidatorFunction(val => !Number.isInteger(val)),
      pulpoError("numberFloat"),
    ]);
    return this;
  }

  generateValidatorFunction(fnExpression) {
    return val => {
      const isNotEmpty = val !== this.emptyValue;
      if (this.isRequired || isNotEmpty) {
        return fnExpression(val);
      }
      return true;
    };
  }
}

module.exports = PulpoNumber;
