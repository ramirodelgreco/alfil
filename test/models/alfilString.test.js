const AlfilString = require("../../src/models/AlfilString");

test("Testing isCorrectType against 'hello' returnss true.", () => {
  const instance = new AlfilString();
  const valueToTest = "hello";
  expect(instance.isCorrectType(valueToTest)).toBeTruthy();
});

test("Testing isCorrectType against 6 returnss false.", () => {
  const instance = new AlfilString();
  const valueToTest = 6;
  expect(instance.isCorrectType(valueToTest)).toBeFalsy();
});

test("Testing isCorrectType with emptyValue setted to null against null returnss true.", () => {
  const instance = new AlfilString({ emptyValue: null });
  const valueToTest = null;
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing required() against '' returnss false.", () => {
  const instance = new AlfilString().required();
  const valueToTest = "";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing required() against '  ' returnss true.", () => {
  const instance = new AlfilString().required();
  const valueToTest = "  ";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing required() against '  ' with trim setted to true returnss false.", () => {
  const instance = new AlfilString({ trim: true }).required();
  const valueToTest = "  ";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing email() against 'johndoe@gmail.com' returns true", () => {
  const instance = new AlfilString().email();
  const valueToTest = "johndoe@gmail.com";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing email() against 'johndoe@gmail' returns false", () => {
  const instance = new AlfilString().email();
  const valueToTest = "johndoe@gmail";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing email() against 'johndoe@gmail' returns false", () => {
  const instance = new AlfilString().email();
  const valueToTest = "johndoe@gmail";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing password() against 'JohnDoe123' returns true", () => {
  const instance = new AlfilString().password();
  const valueToTest = "JohnDoe123";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing password() against 'JohnDoe' returns false", () => {
  const instance = new AlfilString().password();
  const valueToTest = "JohnDoe";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing password() with type setted to 'complex' against 'JohnDoe123!' returns true", () => {
  const instance = new AlfilString().password({ type: "complex" });
  const valueToTest = "JohnDoe123!";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing password() with type setted to 'complex' against 'JohnDoe123' returns false", () => {
  const instance = new AlfilString().password({ type: "complex" });
  const valueToTest = "JohnDoe123";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing username() against 'john.doe' returns true", () => {
  const instance = new AlfilString().username();
  const valueToTest = "john.doe";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing username() against 'john_doe.' returns false", () => {
  const instance = new AlfilString().username();
  const valueToTest = "john_doe.";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing url() against 'http://www.johndoe.com' returns true", () => {
  const instance = new AlfilString().url();
  const valueToTest = "http://www.johndoe.com";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing url() against 'http://www.john_doe.com' returns false", () => {
  const instance = new AlfilString().url();
  const valueToTest = "http://www.john_doe.com";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing url() with type setted to 'requiredProtocol' against 'https://johndoe.com/' returns true", () => {
  const instance = new AlfilString().url({ type: "requiredProtocol" });
  const valueToTest = "https://johndoe.com/";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing url() with type setted to 'requiredProtocol' against 'www.johndoe.com' returns false", () => {
  const instance = new AlfilString().url({ type: "requiredProtocol" });
  const valueToTest = "www.johndoe.com";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing match() with argument '/johndoe/g' against 'johndoe' returns true", () => {
  const instance = new AlfilString().match(/johndoe/g);
  const valueToTest = "johndoe";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing match() with argument '/johndoe/g' against 'john.doe' returns false", () => {
  const instance = new AlfilString().match(/johndoe/g);
  const valueToTest = "john.doe";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing min(4) against 'john' returns true", () => {
  const instance = new AlfilString().min(4);
  const valueToTest = "john";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing min(4) against 'doe' returns false", () => {
  const instance = new AlfilString().min(4);
  const valueToTest = "doe";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing max(8) against 'john doe' returns true", () => {
  const instance = new AlfilString().max(8);
  const valueToTest = "john doe";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing max(8) against 'john dolly' returns false", () => {
  const instance = new AlfilString().max(8);
  const valueToTest = "john dolly";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});

test("Testing enum() with argument ['john', 'doe'] against 'john' returns true", () => {
  const instance = new AlfilString().enum(["john", "doe"]);
  const valueToTest = "john";
  expect(instance.runValidations(valueToTest)).toBeTruthy();
});

test("Testing enum() with argument ['john', 'doe'] against 'jonny' returns false", () => {
  const instance = new AlfilString().enum(["john", "doe"]);
  const valueToTest = "jonny";
  expect(instance.runValidations(valueToTest)).toBeFalsy();
});
