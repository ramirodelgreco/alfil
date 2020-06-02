const PulpoValidator = require("./models/PulpoValidator");
const PulpoString = require("./models/PulpoString");

class Pulpo {
  static createValidator(schema) {
    return new PulpoValidator(schema);
  }

  static string() {
    return new PulpoString();
  }
}

module.exports = Pulpo;
