'use strict';

/*const years = (n, m) => {
    const newYears = [];
    for (let i = n; i <= m; i++) {
        newYears.push(i);
    };
    const result = [];
};
console.log(years(2000, 2022));*/

const chooseYears = (n, m) => {
    const yearArray = [];
    for (let i = n; i <= m; i++) {        
         yearArray.push(i);
    }
    const result = [];

yearArray.forEach(function(year) {
   if (getLeapYear(year))
   result.push(year);
});

return result;
}

const getLeapYear = (year) =>{
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
  return year;
} else {
  return false;
 }
}
console.log(chooseYears(2000, 2022));