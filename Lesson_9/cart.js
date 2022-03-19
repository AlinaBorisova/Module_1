'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0, 
    
    getTotalPrice: function() {
        return this.totalPrice;
    },
    add: function(name, price, count = 1) {
        cart.items.push({
        name: name,
        price: price,
        count: count,
        });
        cart.increaseCount(count);
        cart.calculateItemPrice();
    },
    increaseCount: function(n) {
        this.count += n;
    },
    calculateItemPrice: function() {    
        // forEach
        let sum = 0;  
        this.items.forEach(item => {sum += item.price * item.count;}, 0);
        this.totalPrice = sum;

    // Цикл
        /*let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].price * this.items[i].count;
        };
        this.totalPrice = sum;*/        

    //Рекурсия
        /*function recurse(quant, elem){
            if(elem < quant){
            elem++;
            cart.totalPrice += cart.items[elem].price * cart.items[elem].count;
            return recurse(quant, elem);
            };
        } 
          cart.totalPrice = 0;
          
          recurse(cart.items.length, 0); */
    },
    clear: function() {
        cart.items.splice(0, cart.items.length);
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


console.log(cart);
cart.prints();
cart.clear();
console.log(cart);
