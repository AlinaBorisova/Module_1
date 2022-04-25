'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const game = function() {
    const resultOne = {
      playerScore: 0,
      computerScore: 0,
      tie: 0,
    };

    const result = {
      playerBalls: 5,
      computerBalls: 5,
    };


    const playerChoice = askPlayerOne();
    const computerChoice = getRandomOne(FIGURES_RUS);
    const res = checkResult(playerChoice, computerChoice);
    resultOne[res]++;

    console.log(`Вы выиграли: ${resultOne.playerScore}
      Компьютер выиграл: ${resultOne.computerScore}
      Ничья: ${resultOne.tie}`,
    );
    // 1. компьютер просит ввести ответ в камень, ножницы или бумага
    function askPlayerOne() {
      const player = prompt('Ваш ход: камень, ножницы или бумага');
      if (player) {
        player.toLowerCase();
      }

      // 4. если поле пустое и нажал ок, то заново ввести
      if (player === null) {
        askPlayerOne();
      }
      // 2. если нажал отмена, то игра заканчивается
      if (player === false) {
        alert('Game over');
        // const answer = confirm('Вы точно хотите выйти?');
        // if (answer) {
        return resultOne;
        // } else {
        // askPlayerOne();
        // }
      }

      // 3. если ввел не то, то предлагает ввести заново
      if (player === 'камень' || player === 'ножницы' || player === 'бумага') {
        return player;
      } else {
        alert('Нужно выбрать из предложенного');
        askPlayerOne();
      }


      // 5. если ввел правильно, то записываем выбор пользователя
      // return player;
    }
    // 6. компьютер рандомно выбирает значение
    function getRandomOne(array) {
      const computer = array[Math.floor(Math.random() * array.length)];
      return computer;
    }
    // 7. сравнение значений:
    function checkResult(playerChoice, computerChoice) {
      if (computerChoice === playerChoice) {
        resultOne.tie++;
      } else if (computerChoice === 'камень' && playerChoice === 'ножницы') {
        resultOne.computerScore++;
      } else if (computerChoice === 'камень' && playerChoice === 'бумага') {
        resultOne.playerScore++;
      } else if (computerChoice === 'ножницы' && playerChoice === 'камень') {
        resultOne.playerScore++;
      } else if (computerChoice === 'ножницы' && playerChoice === 'бумага') {
        resultOne.computerScore++;
      } else if (computerChoice === 'бумага' && playerChoice === 'камень') {
        resultOne.computerScore++;
      } else if (computerChoice === 'бумага' && playerChoice === 'ножницы') {
        resultOne.playerScore++;
      }

      return true;
    }

    // 1) компьютер просит ввести число от 1 до количества его шариков
    function userNum() {
      const user = +prompt(`Введите число от 1 до ${result.playerBalls}`);
      // 2) Если игрок нажимает отмена, то игра заканчивается
      if (!user) {
        alert('Game over');
        return result;
      }
      // 3) если ввел не то, то предлагает ввести заново
      if (user < 1 || user > result.playerBalls) {
        alert(`Нужно ввести число из количества Ваших шариков`);
        userNum();
      }
      // 4) если поле пустое и нажал ок, то заново ввести
      if (user === null) {
        alert(`Нужно ввести число из количества Ваших шариков`);
        userNum();
      }
      // 5) если ввел правильно, то записываем выбор пользователя
      return user;
    }
    // 6) затем компьютер рандомно загадывает четное оно или нечетное
    function computerNumAnswer() {
      const n = 1;
      const m = result.playerBalls;
      const computer = Math.round(Math.random(m - n) + n);
      return computer;
    }

    function compStr(computerChoiceFirst) {
      if (computerChoiceFirst % 2 === 0) {
        return 'четное';
      } else {
        return 'нечетное';
      }
    }
    // 8a. 7) далее сравнение, если компьютер угадал, то записываем ему шарики, а у игрока вычитаем
    function checkResultFirst(playerChoiceFirst, computerChoiceFirst) {
      if (playerChoiceFirst % 2 === 0 && computerChoiceFirst % 2 === 0) {
        result.computerBalls += playerChoiceFirst;
        result.playerBalls -= playerChoiceFirst;
      } else if (playerChoiceFirst % 2 !== 0 && computerChoiceFirst % 2 !== 0) {
        result.computerBalls += playerChoiceFirst;
        result.playerBalls -= playerChoiceFirst;
      } else if (playerChoiceFirst % 2 === 0 && computerChoiceFirst % 2 !== 0) {
        result.playerBalls += playerChoiceFirst;
        result.computerBalls -= playerChoiceFirst;
      } else if (playerChoiceFirst % 2 !== 0 && computerChoiceFirst % 2 === 0) {
        result.playerBalls += playerChoiceFirst;
        result.computerBalls -= playerChoiceFirst;
      }

      alert(`Ваш выбор: ${playerChoiceFirst}
        Ответ бота: ${compStr(computerChoiceFirst)}
        У Вас ${result.playerBalls} шариков, у бота ${result.computerBalls} шариков`,
      );
    }
    // 8) потом компьютер рандомно загадывает число от 1 до количества его шариков
    function computerNum() {
      const n = 1;
      const m = result.computerBalls;
      const computer = Math.round(Math.random(m - n) + n);
      return computer;
    }
    // 9) игрок угадывает четное или нечетное (если нажал Ок, то четное, Отмена - нечетное)
    function userNumAnswer() {
      const userAnswer = confirm(`Компьютер загадал число. 
        Четное? 
        Если Да, то нажмите Ок, если Нет, то нажмите Oтмена`);
      return userAnswer;
    }

    function checkResultSecond(playerChoiceSecond, computerChoiceSecond) {
      if (playerChoiceSecond === true && computerChoiceSecond % 2 === 0) {
        result.playerBalls += computerChoiceSecond;
        result.computerBalls -= computerChoiceSecond;
      } else if (playerChoiceSecond === true && computerChoiceSecond % 2 !== 0) {
        result.computerBalls += computerChoiceSecond;
        result.playerBalls -= computerChoiceSecond;
      } else if (playerChoiceSecond === false && computerChoiceSecond % 2 !== 0) {
        result.playerBalls += computerChoiceSecond;
        result.computerBalls -= computerChoiceSecond;
      } else if (playerChoiceSecond === false && computerChoiceSecond % 2 === 0) {
        result.computerBalls += computerChoiceSecond;
        result.playerBalls -= computerChoiceSecond;
      }

      alert(`Ответ бота: ${computerChoiceSecond}
        Ваш выбор: ${playerChoiceSecond}
        У Вас ${result.playerBalls} шариков, у бота ${result.computerBalls} шариков`,
      );
    }

    function askEnd() {
      const askMore = confirm('Еще поиграем?');
      if (askMore) {
        game();
      } else {
        alert('Game over');
        return result;
      }
    }

    function winnerStr() {
      if (result.computerBalls <= 0) {
        alert('Вы победили.');
        askEnd();
      } else if (result.playerBalls <= 0) {
        alert('Вы проиграли.');
        askEnd();
      }
    }

    if (resultOne.tie > 0) {
      return game();
    } else if (resultOne.playerScore > 0) {
      // если в камень, ножницы и бумага победил игрок
      return function startPlayer() {
        const computerChoiceFirst = computerNumAnswer();
        const playerChoiceFirst = userNum();

        const res1 = checkResultFirst(playerChoiceFirst, computerChoiceFirst);
        result[res1]++;

        const playerChoiceSecond = userNumAnswer();
        const computerChoiceSecond = computerNum();

        const res2 = checkResultSecond(playerChoiceSecond, computerChoiceSecond);
        result[res2]++;
        // 12) и процесс повторяется пока один из них не потеряет все шарики
        if (result.computerBalls > 0 && result.playerBalls > 0) {
          startPlayer();
        } else {
          winnerStr();
        }
      };
    } else if (resultOne.computerScore > 0) {
      // если в камень, ножницы и бумага победил компьютер
      return function startComputer() {
        const playerChoiceSecond = userNumAnswer();
        const computerChoiceSecond = computerNum();

        const res2 = checkResultSecond(playerChoiceSecond, computerChoiceSecond);
        result[res2]++;

        const computerChoiceFirst = computerNumAnswer();
        const playerChoiceFirst = userNum();


        const res1 = checkResultFirst(playerChoiceFirst, computerChoiceFirst);
        result[res1]++;

        if (result.computerBalls > 0 && result.playerBalls > 0) {
          startComputer();
        } else {
          winnerStr();
        }
      };
    }
  };

  window.marbl = game;
})();
