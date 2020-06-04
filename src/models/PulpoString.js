const PulpoType = require("./PulpoType");
const { pulpoError } = require("../functions");

class PulpoString extends PulpoType {
  constructor() {
    super();
    this.validatorChain.push([this.isCorrectType, pulpoError("notAString")]);
  }

  isCorrectType(val) {
    return Object.prototype.toString.call(val) === "[object String]";
  }

  required() {
    this.validatorChain.push([val => !!val.length, pulpoError("requiredValue")]);
    return this;
  }

  min(minVal) {
    this.validatorChain.push([val => val.length >= minVal, pulpoError("stringMinLength", minVal)]);
    return this;
  }

  max(maxVal) {
    this.validatorChain.push([val => val.length <= maxVal, pulpoError("stringMaxLength", maxVal)]);
    return this;
  }
}

module.exports = PulpoString;
