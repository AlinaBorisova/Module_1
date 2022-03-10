'use strict';

const newGetRandom = (arr, n, m) => {
  const result = [];
  let min, max;
    if(m > n){
        max = m;
        min = n;
    } else {
    max = n;
    min = m;
    };
  for(let i = 0; i <= arr; i++)
      result.push(Math.ceil(Math.random() * ((m - n) + n)));
  return result;
}
console.log(newGetRandom(10, 0, 100));
