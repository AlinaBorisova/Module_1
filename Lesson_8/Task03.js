'use strict';

const newGetRandom2 = (arr) => {
    const result = [];
    const n = 0;
    const m = 100;
    const getEven = [];
    const getOdd = [];
        for(let i = 0; i <= arr; i++) {
            result.push(Math.ceil(Math.random() * ((m - n) + n)));
                if (result[i] % 2 === 0) {
                    getEven.push(result[i])
                } else if (!result[i] % 2 === 0) {
                    getOdd.push(result[i])}
            }
                console.log(getEven);
        return result;
    };
    newGetRandom2(10);