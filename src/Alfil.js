const AlfilValidator = require("./models/AlfilValidator");
const AlfilString = require("./models/AlfilString");
const AlfilBool = require("./models/AlfilBool");
const AlfilNumber = require("./models/AlfilNumber");

class Alfil {
  constructor() {
    throw new Error("Alfil: Can not instantiate abstract Alfil Class.");
  }

  static createValidator(schema) {
    return new AlfilValidator(schema);
  }

  static string(opts) {
    return new AlfilString(opts);
  }

  static bool() {
    return new AlfilBool();
  }

  static number(opts) {
    return new AlfilNumber(opts);
  }
}

module.exports = Alfil;
