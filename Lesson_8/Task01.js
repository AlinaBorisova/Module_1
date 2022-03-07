'use strict';

const getRandom = (arr) => {
  const result = [];
  for(let i = 0; i <= arr; i++)
      result.push(Math.ceil(Math.random() * 100));
  return result;
}
console.log(getRandom(10));