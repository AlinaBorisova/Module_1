'use strict';

const result = [];
function recurse(arr) {
  result.push(Math.round(Math.random() * 10));

  let sum = 0;
  result.forEach(i => {
    sum += i;
  }, 0);
  if (sum < 50) recurse(result, 0);
  if (sum > 50) return result;
}
recurse();
console.log(result);
