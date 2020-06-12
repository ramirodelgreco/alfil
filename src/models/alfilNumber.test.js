const AlfilNumber = require("./AlfilNumber");

describe("AlfilNumber Tests", () => {
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

  // test("Testing isCorrectType against false returns true.", () => {
  //   // const alfilBool = new AlfilBool();
  //   const valueToTest = false;
  //   expect(instance.isCorrectType(valueToTest)).toBeTruthy();
  // });

  // test("Testing true() against true returns true.", () => {
  //   // const alfilBool = new AlfilBool().true();
  //   const valueToTest = true;
  //   expect(instance.runValidations(valueToTest)).toBeTruthy();
  // });

  // test("Testing false() against false returns true.", () => {
  //   // const alfilBool = new AlfilBool().false();
  //   const valueToTest = false;
  //   expect(instance.runValidations(valueToTest)).toBeTruthy();
  // });
});
