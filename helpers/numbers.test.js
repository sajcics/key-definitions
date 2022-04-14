const { isKeyNumber } = require("./numbers");

describe("test numbers", () => {
  it("check number 1", () => {
    expect(isKeyNumber(55)).toBe(true);
  });
});
