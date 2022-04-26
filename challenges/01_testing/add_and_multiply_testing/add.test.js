const add = require('./add');

describe("add", () => {
  it("adds 2 and 2", () => {
    expect(add(2,2)).toBe(4)
  });
  it("adds 4 and 3", () => {
    expect(add(4,3)).toBe(7)
  });
});