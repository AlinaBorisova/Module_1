'use strict';

{
    const item = prompt('Введите товар');
    let count = +prompt('Введите количество товара');
    const category = prompt('Введите категорию товара');
    let price = +prompt('Введите цену товара'); 


    if (isNaN(count || price)){
        alert("Вы ввели некорректные данные")
        }else {
        console.log('На складе', count, 'единиц товара', item, 'на сумму', (count*price), '$');
        };
}