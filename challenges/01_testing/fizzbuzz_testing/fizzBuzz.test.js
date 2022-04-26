const fizzBuzz = require('./fizzBuzz');

describe("fizzBuzz", () => {
  it("returns 'Fizz' for 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it("returns 4 for 4", () => {
    expect(fizzBuzz(4)).toBe(4);
  });
  it("returns 'Buzz' for 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it("returns 'FizzBuzz' for 15", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});