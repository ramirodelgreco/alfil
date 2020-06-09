const PulpoValidator = require("./models/PulpoValidator");
const PulpoString = require("./models/PulpoString");
const PulpoBool = require("./models/PulpoBool");
const PulpoNumber = require("./models/PulpoNumber");

class Pulpo {
  constructor() {
    throw new Error("Pulpo: Can not instantiate abstract Pulpo Class.");
  }

  static createValidator(schema) {
    return new PulpoValidator(schema);
  }

  static string(opts) {
    return new PulpoString(opts);
  }

  static bool() {
    return new PulpoBool();
  }

  static number(opts) {
    return new PulpoNumber(opts);
  }
}

module.exports = Pulpo;
