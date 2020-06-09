// Error Messages
exports.errorMessages = {
  noResults: "No validation results found.",
  differentKeys: "Both schema and object must have the same keys.",
  notAString: "Value must be a string.",
  notARegex: "Argument must be a valid regular expression.",
  notAnArray: "Argument must be an array.",
  notABool: "Value must be a boolean.",
  requiredValue: "Value must not be empty.",
  stringMinLength: val => `Value must be longer than or equal to ${val}.`,
  stringMaxLength: val => `Value must be shorter than or equal to ${val}.`,
  stringEnum: options => `Value must be one of the following options: ${options.join(", ")}.`,
  stringEmail: "Value must be a valid email account.",
  stringPassword: "Value must be a valid password.",
  stringUrl: "Value must be a valid URL.",
  stringMatch: "Value must match with the regular expression provided.",
  booleanTrue: "Value must be true.",
  booleanFalse: "Value must be false.",
};

// Regular Expressions
exports.regularExpressions = {
  emailRegex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  passwordRegex: {
    complex: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    moderate: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
  },
  urlRegex: {
    requiredProtocol: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g,
    optionalProtocol: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g,
  },
};

// Default Password Regex
exports.defaultPasswordRegex = "moderate";

// Default Url Regex
exports.defaultUrlRegex = "optionalProtocol";
