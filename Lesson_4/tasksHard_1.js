'use strict';

{
const Revenue= +prompt('Введите Ваш доход');

    if (Revenue >0 && Revenue < 15000) {
        console.log(`Tax: ${Revenue * 0.13}`);
    } else if (Revenue >= 15000 && Revenue < 50000) {
        console.log(`Tax: ${Revenue * 0.2}`);
    } else if (Revenue >= 50000) {
        console.log(`Tax: ${Revenue * 0.3}`)
    } else {
        console.log('Ошибка');
    };
}