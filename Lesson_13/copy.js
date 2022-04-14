'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const game = function() {
    const result = {
      playerScore: 0,
      computerScore: 0,
      tie: 0,
      attempt: 0,
    };

    return function start() {
      const playerChoice = askPlayer();
      const computerChoice = getRandom(FIGURES_RUS);

      const res = checkResult(playerChoice, computerChoice);

      result[res]++;

      const ask = confirm('Хотите еще сыграть?');
      if (ask) {
        start();
      } else {
        const answer = confirm('Вы точно хотите выйти?');
        if (answer) {
          alert(`Вы выиграли: ${result.playerScore}
            Компьютер выиграл: ${result.computerScore}
            Ничья: ${result.tie}
            Количество раундов: ${result.attempt}`);
        } else {
          start();
        }
      }
    };
// спросить игрока
    function askPlayer() {
      const player = prompt('Ваш ход: камень, ножницы или бумага');
      if (player) {
        player.toLowerCase();
      }
      return player;
    }

    function getRandom(array) {
      const computer = array[Math.floor(Math.random() * array.length)];
      return computer;
    }

    function checkResult(playerChoice, computerChoice) {
      if (computerChoice === playerChoice) {
        result.tie++;
        result.attempt++;
      } else if (computerChoice === 'камень' && playerChoice === 'ножницы') {
        result.computerScore++;
        result.attempt++;
      } else if (computerChoice === 'камень' && playerChoice === 'бумага') {
        result.playerScore++;
        result.attempt++;
      } else if (computerChoice === 'ножницы' && playerChoice === 'камень') {
        result.playerScore++;
        result.attempt++;
      } else if (computerChoice === 'ножницы' && playerChoice === 'бумага') {
        result.computerScore++;
        result.attempt++;
      } else if (computerChoice === 'бумага' && playerChoice === 'камень') {
        result.computerScore++;
        result.attempt++;
      } else if (computerChoice === 'бумага' && playerChoice === 'ножницы') {
        result.playerScore++;
        result.attempt++;
      }

      if (playerChoice === null) {
        alert('Необходимо что-то выбрать');
      }

      console.log('Ваш выбор:', playerChoice);
      console.log('Выбор компьютера:', computerChoice);
    }
  };
  window.rps = game;
})();
