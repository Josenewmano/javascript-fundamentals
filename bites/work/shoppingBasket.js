require('./candy')

class ShoppingBasket {
  constructor(items) {
    this.items = items;
  }
 addItem(candy) {
    this.items.push(candy);
  }
  getTotalPrice() {
    let total = 0;
    this.items.map( item => total += item.getPrice());
    return total;
  }
}

module.exports = ShoppingBasket;