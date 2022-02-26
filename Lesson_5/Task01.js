'use strict';

const usd = 73;
const euro = 1.2 * usd;

const amount = +prompt('Стоимость покупки в евро');

const converter = (currency) => {
    console.log('Итого рублей:', amount * euro);
};
converter ();
