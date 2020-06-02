const PulpoType = require("./PulpoType");

class PulpoString extends PulpoType {
  isCorrectType(val) {
    return Object.prototype.toString.call(val) === "[object String]";
  }

  required() {
    this.validatorChain.push((val) => !!val.length);
    return this;
  }

  min(minVal) {
    this.validatorChain.push((val) => val.length >= minVal);
    return this;
  }
}

module.exports = PulpoString;
