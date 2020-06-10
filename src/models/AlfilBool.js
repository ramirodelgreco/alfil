const AlfilType = require("./AlfilType");
const { alfilError } = require("../functions");
const { isBool } = require("../utils");

class AlfilBool extends AlfilType {
  constructor(opts = {}) {
    super();
    this.addValidator([this.isCorrectType, alfilError("notABool")]);
  }

  isCorrectType(val) {
    return isBool(val);
  }

  true() {
    this.addValidator([val => val === true, alfilError("booleanTrue")]);
    return this;
  }

  false() {
    this.addValidator([val => val === false, alfilError("booleanFalse")]);
    return this;
  }
}

module.exports = AlfilBool;
