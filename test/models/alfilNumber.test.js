const AlfilNumber = require("../../src/models/AlfilNumber");

test("Testing isCorrectType against 6 returns true.", () => {
  const instance = new AlfilNumber();
  const valueToTest = 6;
  expect(instance.isCorrectType(valueToTest)).toBeTruthy();
});

test("Testing isCorrectType against 'hello' returns false.", () => {
  const instance = new AlfilNumber();
  const valueToTest = "hello";
  expect(instance.isCorrectType(valueToTest)).toBeFalsy();
});

test("Testing isCorrectType against null returns true.", () => {
  const instance = new AlfilNumber();
  const valueToTest = null;
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing isCorrectType with emptyValue setted to emptyString against '' returns true.", () => {
  const instance = new AlfilNumber({ emptyValue: "" });
  const valueToTest = "";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing required() against null returns false.", () => {
  const instance = new AlfilNumber().required();
  const valueToTest = null;
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing min(4) against 3 returns false.", () => {
  const instance = new AlfilNumber().required().min(4);
  const valueToTest = 3;
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing min(4) against 4 returns true.", () => {
  const instance = new AlfilNumber().required().min(4);
  const valueToTest = 4;
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing max(12) against 13 returns false.", () => {
  const instance = new AlfilNumber().required().max(12);
  const valueToTest = 13;
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing max(12) against 12 returns true.", () => {
  const instance = new AlfilNumber().required().max(12);
  const valueToTest = 12;
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing integer() against 5 returns true.", () => {
  const instance = new AlfilNumber().required().integer();
  const valueToTest = 5;
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing integer() against 5.5 returns false.", () => {
  const instance = new AlfilNumber().required().integer();
  const valueToTest = 5.5;
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing float() against 5.5 returns true.", () => {
  const instance = new AlfilNumber().required().float();
  const valueToTest = 5.5;
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing float() against 5 returns false.", () => {
  const instance = new AlfilNumber().required().float();
  const valueToTest = 5;
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});
