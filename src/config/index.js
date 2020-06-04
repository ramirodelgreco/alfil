// Error Messages
const errorMessages = {
  differentKeys: "Both schema and object must have the same keys.",
  notAString: "Value must be a string.",
  requiredValue: "Value must not be empty.",
  stringMinLength: val => `Value must be longer than or equal to ${val}.`,
  stringMaxLength: val => `Value must be shorter than or equal to ${val}.`,
};

module.exports = {
  errorMessages,
};
