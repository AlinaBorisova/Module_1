'use strict';

{
    const item = prompt('Введите товар');
    let count = +prompt('Введите количество товара');
    const category = prompt('Введите категорию товара');
    let price = +prompt('Введите цену товара'); 

    console.log('item: ',typeof item);
    console.log('count: ', typeof count);
    console.log('category:', typeof category);
    console.log('price: ', typeof price);

    console.log('На складе', count, 'единиц товара', item, 'на сумму', (count*price), '$');
    }

