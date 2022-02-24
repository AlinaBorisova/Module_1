'use strict';

{
    const rain = Math.round(Math.random());
    console.log('rain:', rain);
    
    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    } else {
        console.log('Дождя нет!');
    };
}

{
    const userMarkMath = +prompt('Введите кол-во баллов по математике');
    const userMarkRuss = +prompt('Введите кол-во баллов по русскому языку');
    const userMarkIT = +prompt('Введите кол-во баллов по информатике:');

        const totalMark = userMarkMath + userMarkRuss + userMarkIT;
        console.log(totalMark);

        if (totalMark >= 265) {
            console.log('Поздравляю, вы поступили на бюджет!');
        } else {
            console.log('Сожалеем, но у Вас не достаточно баллов.');
        };
}

{
    const Money = +prompt('Введите сумму');

    if (Money % 100 === 0) {
        console.log('Получите деньги');
    } else {
        console.log('Введите сумму, кратную 100');
    }
}

