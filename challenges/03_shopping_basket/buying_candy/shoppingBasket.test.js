const ShoppingBasket = require('./shoppingBasket')

describe(ShoppingBasket, () => {

  test("defines getTotalPrice()", () => {
    let shoppingBasket = new ShoppingBasket();
    expect(typeof shoppingBasket.getTotalPrice).toBe("function")
  })

  test("returns total price of 0 when basket is empty", () => {
    let shoppingBasket = new ShoppingBasket();
    expect(shoppingBasket.getTotalPrice()).toBe(0)
  })

  test("defines addItems()", () => {
    let shoppingBasket = new ShoppingBasket();
    expect(typeof shoppingBasket.addItems).toBe("function")
  })

  test("adds an item to the basket", () => {
    let shoppingBasket = new ShoppingBasket();
    let candyDouble = { getName: () => 'Mars', getPrice: () => 5.00};
    shoppingBasket.addItems(candyDouble);
    expect(shoppingBasket.items).toEqual([candyDouble])
  })

  test("increase price when an item is added to the basket", () => {
    let shoppingBasket = new ShoppingBasket();
    let candyDouble = { getName: () => 'Mars', getPrice: () => 5.00};
    shoppingBasket.addItems(candyDouble);
    expect(shoppingBasket.getTotalPrice()).toBe(5.00)
  })
})