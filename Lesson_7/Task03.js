'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (names, prefix) => {
    const newArr = names.map(el => prefix + el);
    console.log(newArr);
};

addPrefix(names, 'Mr ');


