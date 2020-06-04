class PulpoType {
  constructor() {
    this.validatorChain = [];
    this.errors = [];
  }

  runValidations(value) {
    let result = true;
    for (let validator of this.validatorChain) {
      if (!validator[0](value)) {
        this.errors.push(validator[1]);
        result = false;
      }
    }
    return result;
  }
}

module.exports = PulpoType;
