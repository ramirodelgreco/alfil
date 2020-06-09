const PulpoType = require("./PulpoType");
const { pulpoError, isEmail, isSafePassword } = require("../functions");
const { defaultPasswordRegex } = require("../config");
const { isString, isRegex } = require("../utils");

class PulpoString extends PulpoType {
  constructor(opts = {}) {
    super();
    this.addValidator([this.isCorrectType, pulpoError("notAString")]);
    this.opts = opts;
    this.isRequired = false;
  }

  isCorrectType(val) {
    return isString(val);
  }

  required() {
    this.isRequired = true;
    this.addValidator([val => !!this.applyOptions(val).length, pulpoError("requiredValue")]);
    return this;
  }

  email() {
    this.addValidator([
      this.generateValidatorFunction(val => isEmail(this.applyOptions(val)), true),
      pulpoError("stringEmail"),
    ]);
    return this;
  }

  password({ type = defaultPasswordRegex } = {}) {
    this.addValidator([
      this.generateValidatorFunction(val => isSafePassword(val, type), false),
      pulpoError("stringPassword"),
    ]);
    return this;
  }

  match(regex) {
    let fnValidator, errorMessage;
    if (!isRegex(regex)) {
      fnValidator = val => false;
      errorMessage = pulpoError("notARegex");
    } else {
      fnValidator = val => regex.test(this.applyOptions(val));
      errorMessage = pulpoError("stringMatch");
    }
    this.addValidator([this.generateValidatorFunction(fnValidator, true), errorMessage]);
    return this;
  }

  min(minVal) {
    this.addValidator([
      this.generateValidatorFunction(val => this.applyOptions(val).length >= minVal, true),
      pulpoError("stringMinLength", minVal),
    ]);
    return this;
  }

  max(maxVal) {
    this.addValidator([
      this.generateValidatorFunction(val => this.applyOptions(val).length <= maxVal, true),
      pulpoError("stringMaxLength", maxVal),
    ]);
    return this;
  }

  applyOptions(val) {
    let result = val;
    if (this.opts.trim === true) result = result.trim();
    return result;
  }

  generateValidatorFunction(fnExpression, applyOpts) {
    return val => {
      const isNotEmpty = applyOpts ? !!this.applyOptions(val).length : !!val.length;
      if (this.isRequired || isNotEmpty) {
        return fnExpression(val);
      }
      return true;
    };
  }
}

module.exports = PulpoString;
