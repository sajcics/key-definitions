const { isKeyCharacter } = require("./characters");

describe("Test characters", () => {
  test("Is 56 a character", () => {
    expect(isKeyCharacter(56)).toBeFalsy();
  });

  test("Is 80 a character", () => {
    expect(isKeyCharacter(80)).toBeTruthy();
  });

  test("Is 80 a character", () => {
    expect(isKeyCharacter(91)).toBeFalsy();
  });
});
