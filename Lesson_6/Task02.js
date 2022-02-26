'use strict';

const isPrime = (num) => {
    let num1 = num;
    for (let i = 1; num1 > 0; i++) {
        if (num1 % i === 0) {
            return true;
        } else {return false};
    };
};
const result = isPrime(5);
console.log(result);

    