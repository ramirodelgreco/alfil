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
}

module.exports = PulpoBool;
