const PulpoType = require("./PulpoType");
const { pulpoError, isEmail, isSafePassword, isUrl } = require("../functions");
const { defaultPasswordRegex, defaultUrlRegex } = require("../config");
const { isString, isRegex } = require("../utils");

class PulpoString extends PulpoType {
  constructor({ trim = false, emptyValue = "" } = {}) {
    super();
    this.addValidator([this.isCorrectType.bind(this), pulpoError("notAString")]);
    this.isRequired = false;
    this.emptyValue = emptyValue;
    this.trim = trim;
  }

  isCorrectType(val) {
    if (this.isRequired || val !== this.emptyValue) return isString(val);
    return true;
  }

  required() {
    this.isRequired = true;
    this.addValidator([
      val => this.applyOptions(val) !== this.emptyValue,
      pulpoError("requiredValue"),
    ]);
    return this;
  }

  email() {
    this.addValidator([
      this.generateValidatorFunction(
        val => (isString(val) ? isEmail(this.applyOptions(val)) : false),
        true
      ),
      pulpoError("stringEmail"),
    ]);
    return this;
  }

  password({ type = defaultPasswordRegex } = {}) {
    this.addValidator([
      this.generateValidatorFunction(
        val => (isString(val) ? isSafePassword(val, type) : false),
        false
      ),
      pulpoError("stringPassword"),
    ]);
    return this;
  }

  url({ type = defaultUrlRegex } = {}) {
    this.addValidator([
      this.generateValidatorFunction(
        val => (isString(val) ? isUrl(this.applyOptions(val), type) : false),
        true
      ),
      pulpoError("stringUrl"),
    ]);
    return this;
  }

  match(regex) {
    let fnValidator, errorMessage;
    if (!isRegex(regex)) {
      fnValidator = val => false;
      errorMessage = pulpoError("notARegex");
    } else {
      fnValidator = val => (isString(val) ? regex.test(this.applyOptions(val)) : false);
      errorMessage = pulpoError("stringMatch");
    }
    this.addValidator([this.generateValidatorFunction(fnValidator, true), errorMessage]);
    return this;
  }

  min(minVal) {
    this.addValidator([
      this.generateValidatorFunction(
        val => (isString(val) ? this.applyOptions(val).length >= minVal : false),
        true
      ),
      pulpoError("stringMinLength", minVal),
    ]);
    return this;
  }

  max(maxVal) {
    this.addValidator([
      this.generateValidatorFunction(
        val => (isString(val) ? this.applyOptions(val).length <= maxVal : false),
        true
      ),
      pulpoError("stringMaxLength", maxVal),
    ]);
    return this;
  }

  enum(arrOptions) {
    let fnValidator, errorMessage;
    if (!Array.isArray(arrOptions)) {
      fnValidator = val => false;
      errorMessage = pulpoError("notAnArray");
    } else {
      fnValidator = val => (isString(val) ? arrOptions.includes(this.applyOptions(val)) : false);
      errorMessage = pulpoError("stringEnum", arrOptions);
    }
    this.addValidator([this.generateValidatorFunction(fnValidator, true), errorMessage]);
    return this;
  }

  applyOptions(val) {
    let result = val;
    if (this.trim === true && isString(result)) result = result.trim();
    return result;
  }

  generateValidatorFunction(fnExpression, applyOpts) {
    return val => {
      const isNotEmpty = applyOpts
        ? this.applyOptions(val) !== this.emptyValue
        : val !== this.emptyValue;
      if (this.isRequired || isNotEmpty) {
        return fnExpression(val);
      }
      return true;
    };
  }
}

module.exports = PulpoString;
