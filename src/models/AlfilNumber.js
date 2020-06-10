const AlfilType = require("./AlfilType");
const { alfilError } = require("../functions");
const { isNumber } = require("../utils");

class AlfilNumber extends AlfilType {
  constructor({ emptyValue = null } = {}) {
    super();
    this.addValidator([this.isCorrectType.bind(this), alfilError("notANumber")]);
    this.isRequired = false;
    this.emptyValue = emptyValue;
  }

  isCorrectType(val) {
    if (this.isRequired || val !== this.emptyValue) return isNumber(val);
    return true;
  }

  required() {
    this.isRequired = true;
    this.addValidator([val => val !== this.emptyValue, alfilError("requiredValue")]);
    return this;
  }

  min(minVal) {
    this.addValidator([
      this.generateValidatorFunction(val => val >= minVal),
      alfilError("numberMin", minVal),
    ]);
    return this;
  }

  max(maxVal) {
    this.addValidator([
      this.generateValidatorFunction(val => val <= maxVal),
      alfilError("numberMax", maxVal),
    ]);
    return this;
  }

  integer() {
    this.addValidator([
      this.generateValidatorFunction(val => Number.isInteger(val)),
      alfilError("numberInteger"),
    ]);
    return this;
  }

  float() {
    this.addValidator([
      this.generateValidatorFunction(val => !Number.isInteger(val)),
      alfilError("numberFloat"),
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

module.exports = AlfilNumber;
