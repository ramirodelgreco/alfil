const { defaultLabelName } = require("../config");
const { isString } = require("../utils");

class PulpoType {
  constructor() {
    this.validatorChain = [];
    this.errors = [];
    this.labelName = defaultLabelName;
  }

  addValidator(validator) {
    this.validatorChain.push(validator);
  }

  runValidations(value) {
    let result = true;
    for (let validator of this.validatorChain) {
      if (!this.isSuccess(validator[0], value)) {
        this.addError(validator[1]);
        result = false;
      }
    }
    return result;
  }

  addError(error) {
    this.errors.push(error.replace(new RegExp(defaultLabelName, "gi"), this.labelName));
  }

  isSuccess(validator, ...args) {
    return validator(...args);
  }

  label(label) {
    if (isString(label)) this.labelName = label;
    return this;
  }
}

module.exports = PulpoType;
