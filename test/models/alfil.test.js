const Alfil = require("../../src/Alfil");

test("Validation results have error property when schema and dummy data have different keys.", () => {
  const dummyData = {
    firstName: "John",
    lastName: "Doe",
  };
  const validator = Alfil.createValidator({
    firstName: Alfil.string(),
    email: Alfil.string().email(),
  });
  validator.validate(dummyData);
  expect(validator.getResults()).toHaveProperty("error");
});

test("Validation results don't have error property when schema and dummy data have the same keys.", () => {
  const dummyData = {
    firstName: "John",
    email: "john@doe.com",
  };
  const validator = Alfil.createValidator({
    firstName: Alfil.string(),
    email: Alfil.string().email(),
  });
  validator.validate(dummyData);
  expect(validator.getResults()).not.toHaveProperty("error");
});

test("Validation results have isValid prop equal to true when all validators passed successfully.", () => {
  const dummyData = {
    website: "www.johndoe.com",
    category: "product",
  };
  const validator = Alfil.createValidator({
    website: Alfil.string().url(),
    category: Alfil.string().enum(["marketing", "product", "sales", "legal"]),
  });
  validator.validate(dummyData);
  expect(validator.getResults()).toHaveProperty("isValid", true);
});

test("Validation results have isValid prop equal to false when there is 1 or more validators that were rejected.", () => {
  const dummyData = {
    surface: 30.55,
    isActive: false,
  };
  const validator = Alfil.createValidator({
    surface: Alfil.number().integer(),
    isActive: Alfil.bool(),
  });
  validator.validate(dummyData);
  expect(validator.getResults()).toHaveProperty("isValid", false);
});

test("Validation results have data prop with firstName when is testing { firstName }.", () => {
  const dummyData = {
    firstName: "John Doe",
  };
  const validator = Alfil.createValidator({
    firstName: Alfil.string().required(),
  });
  validator.validate(dummyData);
  expect(validator.getResults()).toHaveProperty("data.firstName");
});

test("Validation results have data prop with firstName with isValid equal to true when validator passed successfully.", () => {
  const dummyData = {
    firstName: "John Doe",
  };
  const validator = Alfil.createValidator({
    firstName: Alfil.string().required(),
  });
  validator.validate(dummyData);
  expect(validator.getResults()).toHaveProperty("data.firstName.isValid", true);
});

test("Validation results have data prop with firstName with isValid equal to false when validator is rejected.", () => {
  const dummyData = {
    username: "johndoe.",
  };
  const validator = Alfil.createValidator({
    username: Alfil.string().username(),
  });
  validator.validate(dummyData);
  expect(validator.getResults()).toHaveProperty("data.username.isValid", false);
});

test("Validation results have data prop with firstName with errors equal to an array when validator is rejected.", () => {
  const dummyData = {
    title: "John",
  };
  const validator = Alfil.createValidator({
    title: Alfil.string().match(/Paul/g),
  });
  validator.validate(dummyData);
  expect(Array.isArray(validator.getResults().data.title.errors)).toBe(true);
});
