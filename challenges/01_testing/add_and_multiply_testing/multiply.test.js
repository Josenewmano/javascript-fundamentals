const multiply = require('./multiply');

describe("multiply", () => {
  it("multiplies 2 and 2", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it("multiplies 3 and 6", () => {
    expect(multiply(3, 6)).toBe(18);
  });
});