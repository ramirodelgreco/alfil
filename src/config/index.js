// Default Label Name
exports.defaultLabelName = "Value";

// Error Messages
exports.errorMessages = {
  noResults: "No validation results found.",
  differentKeys: "Both schema and object must have the same keys.",
  notAString: `${module.exports.defaultLabelName} must be a string.`,
  notARegex: "Argument must be a valid regular expression.",
  notAnArray: "Argument must be an array.",
  notABool: `${module.exports.defaultLabelName} must be a boolean.`,
  notANumber: `${module.exports.defaultLabelName} must be a number.`,
  requiredValue: `${module.exports.defaultLabelName} must not be empty.`,
  stringMinLength: val =>
    `${module.exports.defaultLabelName} must be longer than or equal to ${val}.`,
  stringMaxLength: val =>
    `${module.exports.defaultLabelName} must be shorter than or equal to ${val}.`,
  stringEnum: options =>
    `${module.exports.defaultLabelName} must be one of the following options: ${options.join(
      ", "
    )}.`,
  stringEmail: `${module.exports.defaultLabelName} must be a valid email account.`,
  stringPassword: `${module.exports.defaultLabelName} must be a valid password.`,
  stringUsername: `${module.exports.defaultLabelName} must be a valid username.`,
  stringUrl: `${module.exports.defaultLabelName} must be a valid URL.`,
  stringMatch: `${module.exports.defaultLabelName} must match with the regular expression provided.`,
  booleanTrue: `${module.exports.defaultLabelName} must be true.`,
  booleanFalse: `${module.exports.defaultLabelName} must be false.`,
  numberMin: val => `${module.exports.defaultLabelName} must be greater than or equal to ${val}.`,
  numberMax: val => `${module.exports.defaultLabelName} must be less than or equal to ${val}.`,
  numberInteger: `${module.exports.defaultLabelName} must be an integer.`,
  numberFloat: `${module.exports.defaultLabelName} must be a float.`,
};

// Regular Expressions
exports.regularExpressions = {
  emailRegex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  passwordRegex: {
    complex: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    moderate: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
  },
  usernameRegex: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gi,
  urlRegex: {
    requiredProtocol: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g,
    optionalProtocol: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g,
  },
};

// Default Password Regex
exports.defaultPasswordRegex = "moderate";

// Default Url Regex
exports.defaultUrlRegex = "optionalProtocol";
