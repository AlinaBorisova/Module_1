'use strict';

const newGetRandom = (arr) => {
  const result = [];
  const n = 0;
  const m = 100;
  for(let i = 0; i <= arr; i++)
      result.push(Math.ceil(Math.random() * ((m - n) + n)));
  return result;
}
console.log(newGetRandom(10));
