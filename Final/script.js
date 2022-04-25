'use strict';

const play = window.marbl();
play();

/*внутри модуля IIFE: 1. функция game, внутри которой я записываю все функции и константы для игры.      2. и в конце game у меня return  в котором я запускаю функции для игры.*/


/* 
1. компьютер просит ввести ответ в камень, ножницы или бумага
2. если нажал отмена, то игра заканчивается
3. если ввел не то, то предлагает ввести заново
4. если поле пустое и нажал ок, то заново ввести
5. если ввел правильно, то записываем выбор пользователя
6. компьютер рандомно выбирает значение
7. сравнение значений: кто выиграл, тот и ходит первый в шарики
8а. 1)Если выйграл игрок, компьютер просит ввести число от 1 до количества его шариков
    2)Если игрок нажимает отмена, то игра заканчивается
    3) если ввел не то, то предлагает ввести заново
    4) если поле пустое и нажал ок, то заново ввести
    5) если ввел правильно, то записываем выбор пользователя
    6) затем компьютер рандомно загадывает четное оно или нечетное
    7) далее сравнение, если компьютер угадал, то записываем ему шарики, а у игрока вычитаем
    8) потом компьютер рандомно загадывает число от 1 до количества его шариков
    9) игрок угадывает четное или нечетное (если нажал Ок, то четное, Отмена - нечетное) 
    10) если игрок угадал, то записываем ему шарики, а у компьютера вычитаем
    11) если у обоих игроков есть шарики, то компьютер снова предлагает ввести число
    12) и процесс повторяется пока один из них не потеряет все шарики
    13) когда кто-то выиграл, то выводится результат игры и предлагает сыграть еще раз 
    14) если нажиамет Да, то игра начинается заново с хода в камень, ножницы и бумага
    15) если нажимает Отмена, то игра заканчивается
8б. Если выиграл компьютер, то то же самое только первым ходит компьютер
*/




/*return function start() {
    if (resultOne.tie > 0) {
      game();
    };

    if(resultOne.playerScore > 0) {
      function startPlayer() {
        
        const computerChoiceFirst = computerNumAnswer();
        const playerChoiceFirst = userNum();
          if (!playerChoiceFirst) {
            alert('Game over');
            return result;
          };
      
        const res1 = checkResultFirst(playerChoiceFirst, computerChoiceFirst);
        result[res1]++;
      
        const playerChoiceSecond = userNumAnswer();
        const computerChoiceSecond = computerNum();
      
        const res2 = checkResultSecond(playerChoiceSecond, computerChoiceSecond);
        result[res2]++;

        if (result.computerBalls > 0 &&  result.playerBalls > 0) {
          startPlayer();
        } else if (result.computerBalls <= 0) {
          const askMoreOne = confirm('Вы победили. Еще поиграем?');
          if (askMoreOne) {
            game();
            play();
          } else {
            alert('Game over');
          return result;
          }
        } else if (result.playerBalls <= 0) {
          const askMoreTwo = confirm('Вы проиграли. Еще поиграем?');
            if (askMoreTwo) {
              //game();
              play();
            } else {
              alert('Game over');
              return result;
          }        
        } 
      }
    } else if (resultOne.computerScore > 0) {
      function startComputer() {
        const playerChoiceSecond = userNumAnswer();
        const computerChoiceSecond = computerNum();
      
        const res2 = checkResultSecond(playerChoiceSecond, computerChoiceSecond);
        result[res2]++;

        const computerChoiceFirst = computerNumAnswer();
        const playerChoiceFirst = userNum();
          if (!playerChoiceFirst) {
            alert('Game over');
            return result;
          };
      
        const res1 = checkResultFirst(playerChoiceFirst, computerChoiceFirst);
        result[res1]++;

        if (result.computerBalls > 0 &&  result.playerBalls > 0) {
          startComputer();
        } else if (result.computerBalls <= 0) {
          const askMore = confirm('Вы победили. Еще поиграем?');
            if (askMore) {
              //game();
              play();
            } else {
              alert('Game over');
            return result;
            }
        } else if (result.playerBalls <= 0) {
          const askMore = confirm('Вы проиграли. Еще поиграем?');
            if (askMore) {
              //game();
              play();
            } else {
              alert('Game over');
            return result;
            }
        }
      }
    };
  };
  };*/