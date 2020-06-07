const PulpoType = require("./PulpoType");
const { pulpoError, isEmail, isSafePassword } = require("../functions");
const { defaultPasswordRegex } = require("../config");
const { isString, isRegex } = require("../utils");

class PulpoString extends PulpoType {
  constructor(opts = {}) {
    super();
    this.addValidator([this.isCorrectType, pulpoError("notAString")]);
    this.opts = opts;
  }

  isCorrectType(val) {
    return isString(val);
  }

  required() {
    this.addValidator([val => !!this.applyOptions(val).length, pulpoError("requiredValue")]);
    return this;
  }

  email() {
    this.addValidator([val => isEmail(this.applyOptions(val)), pulpoError("stringEmail")]);
    return this;
  }

  password({ type = defaultPasswordRegex } = {}) {
    this.addValidator([val => isSafePassword(val, type), pulpoError("stringPassword")]);
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
    this.addValidator([fnValidator, errorMessage]);
    return this;
  }

  min(minVal) {
    this.addValidator([
      val => this.applyOptions(val).length >= minVal,
      pulpoError("stringMinLength", minVal),
    ]);
    return this;
  }

  max(maxVal) {
    this.addValidator([
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
