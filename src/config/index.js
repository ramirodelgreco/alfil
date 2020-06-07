// Error Messages
exports.errorMessages = {
  differentKeys: "Both schema and object must have the same keys.",
  notAString: "Value must be a string.",
  requiredValue: "Value must not be empty.",
  stringMinLength: val => `Value must be longer than or equal to ${val}.`,
  stringMaxLength: val => `Value must be shorter than or equal to ${val}.`,
  stringEmail: "Value must be a valid email account.",
  stringPassword: "Value must be a valid password.",
  stringMatch: "Value must match with the regular expression provided.",
  notARegex: "Argument must be a valid regular expression.",
};

// Regular Expressions
exports.regularExpressions = {
  emailRegex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  passwordRegex: {
    complex: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    moderate: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
  },
};

// Default Password Regex
exports.defaultPasswordRegex = "moderate";
