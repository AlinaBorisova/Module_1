'use strict';

const newGetRandom2 = (arr, n, m, str) => {
    const result = [];
    
    let min, max;
    if(m > n){
        max = m;
        min = n;
    } else {
    max = n;
    min = m;
    };
        for(let i = 0; i <= arr; i++) {
            result.push(Math.ceil(Math.random() * ((max - min) + min)));
        };

        if (str = 'even') {
            return result.filter((item) => (item % 2 === 0))
        };
        if (str = 'odd') {
            return result.filter((item) => (item % 2 === 1))
        };
};
    console.log(newGetRandom2(10, 100, 0, 'odd'));