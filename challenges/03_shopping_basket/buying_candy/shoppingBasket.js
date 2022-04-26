const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  getTotalPrice() {
   let total_price = 0;
   this.items.forEach((item) => {
     total_price += item.getPrice();
   })
   return total_price;
  }

  addItems(candy) {
    this.items.push(candy)
  }
}

module.exports = ShoppingBasket;