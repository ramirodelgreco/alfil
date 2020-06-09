const PulpoValidator = require("./models/PulpoValidator");
const PulpoString = require("./models/PulpoString");
const PulpoBool = require("./models/PulpoBool");
const PulpoNumber = require("./models/PulpoNumber");

class Pulpo {
  static createValidator(schema) {
    return new PulpoValidator(schema);
  }

  static string(opts) {
    return new PulpoString(opts);
  }

  static bool() {
    return new PulpoBool();
  }

  static number() {
    return new PulpoNumber();
  }
}

module.exports = Pulpo;
