class PulpoType {
  constructor() {
    this.validatorChain = [];
  }

  runValidations(value) {
    let result = true;
    if (!this.isCorrectType(value)) result = false;
    for (let validator of this.validatorChain) {
      if (!validator(value)) result = false;
    }
    return result;
  }
}

module.exports = PulpoType;
