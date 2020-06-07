exports.arraysAreEqual = (_arr1, _arr2) => {
  if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length) return false;

  var arr1 = _arr1.concat().sort();
  var arr2 = _arr2.concat().sort();

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

exports.isString = val => {
  return Object.prototype.toString.call(val) === "[object String]";
};

exports.isRegex = val => {
  return val instanceof RegExp;
};

exports.isBool = val => {
  return val === true || val === false;
};
