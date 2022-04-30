'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  let resultMarbl = {
    playerBalls: 5,
    computerBalls: 5,
  };
  const stonePaperScissors = function() {
    /**
     * Ход компьютеора
     * Add array and numbers.
     * @param {array} array The first array.
     * @return {number} str from array.
     */
    function getRandomComp(array = FIGURES_RUS) {
      const computer = array[Math.floor(Math.random() * array.length)];
      return computer;
    }

    /**
     * Ответ игрока
     * Add str.
     * @return {string} str from array.
     */
    function askPlayerRps() {
      const player = prompt('Ваш ход: камень, ножницы или бумага');
      if (player === null) return false;
      if (FIGURES_RUS.find((item) => item === player)) {
        return player.toLowerCase();
      } else {
        return askPlayerRps();
      }
    }

    const resultComp = getRandomComp();
    const resultPlayer = askPlayerRps();

    if (resultPlayer === false) return false;

    let result = 0;
    if (resultComp === resultPlayer) {
      alert('Ничья');
      return stonePaperScissors();
    }
    if (
      (resultComp === 'камень' && resultPlayer === 'ножницы') ||
      (resultComp === 'ножницы' && resultPlayer === 'бумага') ||
      (resultComp === 'бумага' && resultPlayer === 'камень')
    ) {
      alert('Победил компьютер');
      result = 'comp';
    } else {
      alert('Вы победили');
      result = 'playes';
    }
    console.log(`Choose comp = ${resultComp}: Choose player = ${resultPlayer}`);
    return result;
  };
  const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };
  const marbl = function(result = resultMarbl, howFirst = 0) {
    /**
     * Ход игрока
     * @return {number} число из диапазона шариков.
     */
    function askPlayer() {
      let player = prompt(`Введите число от 1 до ${result.playerBalls}`);
      if (player === null || player === false) return result;
      player = +player;
      if (isNumber(player) && player < result.playerBalls + 1 && player >= 1) {
        return player;
      } else {
        return askPlayer();
      }
    }
    /**
     * Ответ компьютера
     * @param {number} maxNum,количество шариков игрока
     * @return {number} число из диапазона шариков.
     */
    function computerNumAnswer(maxNum) {
      const n = 1;
      const m = maxNum;
      const computer = Math.round(Math.random(m - n) + n);
      return computer;
    }
    /**
     * Ход компьютера
     * @return {number} число из диапазона шариков.
     */
    function computerNum() {
      const n = 1;
      const m = result.computerBalls;
      const computer = Math.round(Math.random(m - n) + n);
      return computer;
    }
    /**
     * Ответ игрока
     * @return {number} число из диапазона шариков.
     */
    function userNumAnswer() {
      const userAnswer = confirm(`Компьютер загадал число. 
        Четное? 
        Если Да, то нажмите Ок, если Нет, то нажмите Oтмена`);
      return userAnswer;
    }
    /**
     * Сравнение результатов
     * @param {number} playerFirst, число игрока
     * @param {number} computerFirst, ответ компьютера
     * @return {number} число из диапазона шариков.
     */
    function checkResultFirst(playerFirst, computerFirst) {
      if (playerFirst % 2 === 0 && computerFirst % 2 === 0) {
        result.computerBalls += playerFirst;
        result.playerBalls -= playerFirst;
      } else if (playerFirst % 2 === 0 && computerFirst % 2 !== 0) {
        result.playerBalls += playerFirst;
        result.computerBalls -= playerFirst;
      } else if (playerFirst % 2 !== 0 && computerFirst % 2 !== 0) {
        result.computerBalls += playerFirst;
        result.playerBalls -= playerFirst;
      } else if (playerFirst % 2 !== 0 && computerFirst % 2 === 0) {
        result.playerBalls += playerFirst;
        result.computerBalls -= playerFirst;
      }

      alert(`Ваш выбор: ${playerFirst}
          Выбор компьютера: ${computerFirst}
          У Вас ${result.playerBalls} шариков
          У бота ${result.computerBalls} шариков`,
      );
      return true;
    }
    /**
     * Сравнение результатов
     * @param {number} playerSecond, число компьютера
     * @param {number} computerSecond,ответ игрока
     * @return {number} число из диапазона шариков.
     */
    function checkResultSecond(playerSecond, computerSecond) {
      if (playerSecond === true && computerSecond % 2 === 0) {
        result.playerBalls += computerSecond;
        result.computerBalls -= computerSecond;
      } else if (playerSecond === true && computerSecond % 2 !== 0) {
        result.computerBalls += computerSecond;
        result.playerBalls -= computerSecond;
      } else if (playerSecond === false && computerSecond % 2 !== 0) {
        result.playerBalls += computerSecond;
        result.computerBalls -= computerSecond;
      } else if (playerSecond === false && computerSecond % 2 === 0) {
        result.computerBalls += computerSecond;
        result.playerBalls -= computerSecond;
      }

      alert(`Выбор компьютера: ${computerSecond}
        Ваш выбор: ${playerSecond}
        У Вас ${result.playerBalls} шариков
        У бота ${result.computerBalls} шариков`,
      );
      return true;
    }


    // 1 - значит комп, если 0 - игрок
    if (howFirst === 1) {
    // comp
      const playerSecond = userNumAnswer();
      const computerSecond = computerNum(result.computerBalls);

      const res2 = checkResultSecond(playerSecond, computerSecond);
      result[res2]++;

      const playerFirst = askPlayer();
      const computerFirst = computerNumAnswer();


      const res1 = checkResultFirst(playerFirst, computerFirst);
      result[res1]++;
    } else {
      // player
      const playerFirst = askPlayer();
      const computerFirst = computerNumAnswer(result.playerBalls);

      const res1 = checkResultFirst(playerFirst, computerFirst);
      result[res1]++;

      const playerSecond = userNumAnswer();
      const computerSecond = computerNum();

      const res2 = checkResultSecond(playerSecond, computerSecond);
      result[res2]++;
    }


    if (result.playerBalls > 0 && result.computerBalls > 0) {
      return marbl(result, howFirst);
    } else {
      const more = confirm('Game Over. More?');
      if (more === true) {
        resultMarbl = {
          playerBalls: 5,
          computerBalls: 5,
        };
        game();
      } else {
        return false;
      }
    }
  };
  /**
    * Сравнение результатов
    * @return {number} число из диапазона шариков.
  */
  function game() {
    let howFirst = 0;
    const winner = stonePaperScissors();
    if (winner === false) return false;
    if (winner === 'comp') howFirst = 1;
    else howFirst = 0;
    marbl(resultMarbl, howFirst);
    return true;
  }
  window.rps = game;
})();
