const PulpoType = require("./PulpoType");
const { pulpoError } = require("../functions");
const { isBool } = require("../utils");

class PulpoBool extends PulpoType {
  constructor(opts = {}) {
    super();
    this.addValidator([this.isCorrectType, pulpoError("notABool")]);
  }

  isCorrectType(val) {
    return isBool(val);
  }

  true() {
    this.addValidator([val => val === true, pulpoError("booleanTrue")]);
    return this;
  }

  false() {
    this.addValidator([val => val === false, pulpoError("booleanFalse")]);
    return this;
  }
}

module.exports = PulpoBool;
