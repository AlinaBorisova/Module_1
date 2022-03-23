'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0, 
    
    add: function(name, price, count = 1) {
        cart.items.push({
        name: name,
        price: price,
        count: count,
        });
        cart.increaseCount(count);
    },
    increaseCount: function(n) {
        this.count += n;
    },
    calculateItemPrice: function() {    
        let sum = 0;  
        this.items.forEach(item => {sum += item.price * item.count;}, 0);
        return sum;

    },
    clear: function() {
        cart.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },
    prints: function() {
        const cartStr = JSON.stringify(cart.items);
        console.log(cartStr);
        console.log('totalPrice =', this.totalPrice);
    },
};


let fruits = new cart.add('Apple', 200);
let veg = new cart.add('Tomato', 250);
let meat = new cart.add('Pork', 800);

//cart.clear();

console.log(cart);

Object.defineProperty(cart, 'totalPrice', {
    get() {
        return cart.calculateItemPrice();
},
}),

cart.prints();







