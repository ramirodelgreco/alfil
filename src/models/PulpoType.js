class PulpoType {
  constructor() {
    this.validatorChain = [];
    this.errors = [];
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
    this.errors.push(error);
  }

  isSuccess(validator, ...args) {
    return validator(...args);
  }
}

module.exports = PulpoType;
