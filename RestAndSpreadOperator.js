/*
Rest operator is just like the ... operator in java . the difference is that dots are in front
With the rest operator, you can create functions that take a variable number of arguments. 
These arguments are stored in an array that can be accessed later from inside the function.
Rest stores in array
*/
const sum = (function() {
  "use strict";
  return function sum(...x) {
    
    return x.reduce((s,v) => {
          s=v+s;
          return s
    },0)
  };
})();
console.log(sum(1, 2, 3)); // 6

//SPREAD
/*
ES6 introduces the spread operator, which allows us to expand arrays and
other expressions in places where multiple parameters or elements are expected.
...arr returns an unpacked array. In other words, it spreads the array.
const spreaded = ...arr; // will throw a syntax error
*/

//Since ... returns an unpacked array there is a way we can copy one array to other using spread operator
let arr1 =[1,2,3,4];
const arr2 = [...arr1];
