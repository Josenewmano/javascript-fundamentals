const Candy =  require('./candy');

describe(Candy, () => {
  const candy = new Candy('Mars', 5.00);

  test("defines getName()", () => {
    expect(typeof candy.getName).toBe("function");
  });

  test("returns the name", () => {
    expect(candy.getName()).toBe('Mars')
  })

  test("defines getPrice()", () => {
    expect(typeof candy.getPrice).toBe("function")
  })

  test("returns the price", () => {
    expect(candy.getPrice()).toBe(5.00)
  })

});