const PulpoValidator = require("./models/PulpoValidator");
const PulpoString = require("./models/PulpoString");
const PulpoBool = require("./models/PulpoBool");

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
}

module.exports = Pulpo;
