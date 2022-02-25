'use strict';

const newStr = (str) => {
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);  
    };
    console.log(newStr('привет Мир'));
  
