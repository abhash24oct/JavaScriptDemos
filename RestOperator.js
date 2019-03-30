//Rest operator is just like the ... operator in java . the difference is that dots are in front
//...arr returns an unpacked array. In other words, it spreads the array.
//const spreaded = ...arr; // will throw a syntax error
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
