const AlfilValidator = require("../../src/models/AlfilValidator");

test("Testing getResults() having validation results equal to {} returns an error.", () => {
  const instance = new AlfilValidator({});
  expect(instance.getResults).toThrow(Error);
});

test("Testing getResults() having validation results equal to {...} returns the object.", () => {
  const instance = new AlfilValidator({});
  instance.validationResults = { data: "some data", isValid: true };
  expect(instance.getResults()).toEqual({ data: "some data", isValid: true });
});

test("Testing isObjectEqualToSchema() against objects with the same keys returns true.", () => {
  const valueToTest = { name: "john", email: "john@doe.com" };
  expect(AlfilValidator.isObjectEqualToSchema(valueToTest, valueToTest)).toBeTruthy();
});

test("Testing isObjectEqualToSchema() against objects with different keys returns false.", () => {
  const valueToTest = { name: "john", email: "john@doe.com" };
  const valueToTest2 = { name: "john" };
  expect(AlfilValidator.isObjectEqualToSchema(valueToTest, valueToTest2)).toBeFalsy();
});
