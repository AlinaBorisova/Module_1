'use strict';

const min = 0;
const max = 100;
const num = Math.round(Math.random() * (max - min));
console.log(num);

const game = () => {
  const userNum = +prompt('Введите число');
  if (userNum < num) {
    alert('Больше');
  } else if (userNum > num) {
    alert('Меньше');
  } else if (userNum === num) {
    alert('Правильно');
    return userNum;
  }

  if (isNaN(userNum)) {
    alert('Нужно ввести число');
  }

  if (userNum === null) {
    alert('Пока');
  }
  return game();
};

game();
