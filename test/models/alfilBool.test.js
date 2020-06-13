const AlfilBool = require("../../src/models/AlfilBool");

test("Testing isCorrectType against true returns true.", () => {
  const instance = new AlfilBool();
  const valueToTest = true;
  expect(instance.isCorrectType(valueToTest)).toBeTruthy();
});

test("Testing isCorrectType against false returns true.", () => {
  const instance = new AlfilBool();
  const valueToTest = false;
  expect(instance.isCorrectType(valueToTest)).toBeTruthy();
});

test("Testing true() against true returns true.", () => {
  const instance = new AlfilBool().true();
  const valueToTest = true;
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing false() against false returns true.", () => {
  const instance = new AlfilBool().false();
  const valueToTest = false;
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});
