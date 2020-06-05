const PulpoType = require("./PulpoType");
const { pulpoError, isEmail } = require("../functions");

class PulpoString extends PulpoType {
  constructor(opts = {}) {
    super();
    this.validatorChain.push([this.isCorrectType, pulpoError("notAString")]);
    this.opts = opts;
  }

  isCorrectType(val) {
    return Object.prototype.toString.call(val) === "[object String]";
  }

  required() {
    this.validatorChain.push([val => !!this.applyOptions(val).length, pulpoError("requiredValue")]);
    return this;
  }

  email() {
    this.validatorChain.push([val => isEmail(this.applyOptions(val)), pulpoError("stringEmail")]);
    return this;
  }

  min(minVal) {
    this.validatorChain.push([
      val => this.applyOptions(val).length >= minVal,
      pulpoError("stringMinLength", minVal),
    ]);
    return this;
  }

  max(maxVal) {
    this.validatorChain.push([
      val => this.applyOptions(val).length <= maxVal,
      pulpoError("stringMaxLength", maxVal),
    ]);
    return this;
  }

  applyOptions(val) {
    let result = val;
    if (this.opts.trim === true) result = result.trim();
    return result;
  }
}

module.exports = PulpoString;
