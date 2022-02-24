'use strict';

{
const revenue= +prompt('Введите Ваш доход');

    if (revenue >0 && revenue < 15000) {
        console.log(`Tax: ${revenue * 0.13}`);
    } else if (revenue >= 15000 && revenue < 50000) {
        console.log(`Tax: ${revenue * 0.2}`);
    } else if (revenue >= 50000) {
        console.log(`Tax: ${revenue * 0.3}`)
    } else {
        console.log('Ошибка');
    };
}