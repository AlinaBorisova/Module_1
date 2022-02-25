'usse strict';

const calc = (amount, quantity, promo) => {
    if (quantity > 10) {
        newAmount1 = amount - amount * 0.03;
        console.log('Итого с учетом скидки:', newAmount1);
    };
    if (amount > 30000) {
        newAmount2 = newAmount1 - (amount - 30000) * 0.15;
        console.log('Итого с учетом скидки:', newAmount2);
    };
    if (promo === 'METHED') {
        newAmount3 = newAmount2 - amount * 0.1;
        console.log('Итого с учетом скидки:',newAmount3);
    }else if (promo === 'G3H2Z1' && newAmount2 > 2000) {
        newAmount4 = newAmount2 - 500;
        console.log('Итого с учетом скидки:', newAmount4)
    };  
};
    calc(70000, 15, 'G3H2Z1');
