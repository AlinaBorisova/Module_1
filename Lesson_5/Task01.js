'use strict';

let usd = 73;
let euro = 1.2 * usd;

const amount = +prompt('Стоимость покупки в евро');

const converter = (currency) => {
    console.log('Итого рублей:', amount * euro);
};
converter ();
