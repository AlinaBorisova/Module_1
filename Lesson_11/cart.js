'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,

  Add: function(name, price, count = 1) {
    cart.items.push({
      name,
      price,
      count,
    });
    cart.increaseCount(count);
  },
  increaseCount(n) {
    this.count += n;
  },
  calculateItemPrice() {
    let sum = 0;
    this.items.forEach(item => {
      sum += item.price * item.count;
    }, 0);
    return sum;
  },
  clear() {
    cart.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  prints() {
    const cartStr = JSON.stringify(cart.items);
    console.log(cartStr);
    console.log('totalPrice =', this.totalPrice);
  },
};


const fruits = new cart.Add('Apple', 200);
const veg = new cart.Add('Tomato', 250);
const meat = new cart.Add('Pork', 800);

// cart.clear();

console.log(cart);
cart.prints();

