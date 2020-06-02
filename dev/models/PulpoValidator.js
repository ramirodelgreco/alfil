const utils = require("../utils");
const { pulpoError } = require("../functions");

class PulpoValidator {
  constructor(schema) {
    this.schema = schema;
    this.validationResults = {};
  }

  validate(obj) {
    if (!PulpoValidator.isObjectEqualToSchema(obj, this.schema)) {
      this.generateValidationResults({
        isValid: false,
        error: pulpoError("differentKeys"),
      });
    } else {
      for (let key in obj) {
        this.generateValidationResults({
          [key]: {
            value: obj[key],
            isValid: this.schema[key].runValidations(obj[key]),
          },
        });
      }
    }
    return { ...this.validationResults };
  }

  generateValidationResults({ isValid, error, ...field }) {
    if (Object.keys(field).length) {
      if (!this.validationResults.data) this.validationResults.data = {};
      this.validationResults.data = {
        ...this.validationResults.data,
        ...field,
      };
      this.validationResults.isValid = field[Object.keys(field)[0]].isValid;
    }
    if (isValid !== undefined) this.validationResults.isValid = isValid;
    if (error !== undefined) this.validationResults.error = error;
  }

  static isObjectEqualToSchema(obj, schema) {
    return utils.arraysAreEqual(Object.keys(schema), Object.keys(obj));
  }
}

module.exports = PulpoValidator;
