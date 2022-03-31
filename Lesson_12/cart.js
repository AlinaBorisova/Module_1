'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  discount: 0,
  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  add(name, price, count = 1) {
    this.items.push({
      name,
      price,
      count,
    });
    this.increaseCount(count);
  },
  increaseCount(n) {
    this.count += n;
  },
  calculateItemPrice() {
    let sum = 0;
    this.items.forEach(item => {
      sum += item.price * item.count * (1 - this.discount / 100);
    }, 0);
    return sum;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  prints() {
    const cartStr = JSON.stringify(cart.items);
    console.log(cartStr);
    console.log('totalPrice =', this.totalPrice);
  },
};


cart.setDiscount('NEWYEAR');
cart.add('Apple', 200);
cart.add('Tomato', 250);
cart.add('Pork', 800);

// cart.clear();

console.log(cart);
cart.prints();

