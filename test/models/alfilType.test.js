const AlfilType = require("../../src/models/AlfilType");
const { defaultLabelName } = require("../../src/config");

test("Testing label() with no argument preserves the default label.", () => {
  const instance = new AlfilType().label();
  const valueToTest = instance.labelName;
  expect(valueToTest).toBe(defaultLabelName);
});

test("Testing label() with argument 'Email' adds the corresponding label to AlfilType instance.", () => {
  const instance = new AlfilType().label("Email");
  const valueToTest = instance.labelName;
  expect(valueToTest).toBe("Email");
});

test("Testing errorText() with argument 'This is a custom error text.' adds the corresponding error to AlfilType instance.", () => {
  const instance = new AlfilType().errorText("This is a custom error text.");
  const valueToTest = instance.customError;
  expect(valueToTest).toBe("This is a custom error text.");
});

test("Testing errorText() with no argument preserves the default null error text", () => {
  const instance = new AlfilType().errorText();
  const valueToTest = instance.customError;
  expect(valueToTest).toBe(null);
});
