const { defaultLabelName } = require("../config");
const { isString } = require("../utils");

class PulpoType {
  constructor() {
    this.validatorChain = [];
    this.errors = [];
    this.labelName = defaultLabelName;
    this.customError = null;
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
    if (!this.customError) {
      this.errors.push(error.replace(new RegExp(defaultLabelName, "gi"), this.labelName));
      return;
    }
    if (!this.errors.length) this.errors.push(this.customError);
  }

  isSuccess(validator, ...args) {
    return validator(...args);
  }

  label(label) {
    if (isString(label)) this.labelName = label;
    return this;
  }

  errorText(customError) {
    if (isString(customError)) this.customError = customError;
    return this;
  }
}

module.exports = PulpoType;
