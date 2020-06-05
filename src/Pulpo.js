const PulpoValidator = require("./models/PulpoValidator");
const PulpoString = require("./models/PulpoString");

class Pulpo {
  static createValidator(schema) {
    return new PulpoValidator(schema);
  }

  static string(opts) {
    return new PulpoString(opts);
  }
}

module.exports = Pulpo;
