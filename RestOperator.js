//Rest operator is just like the ... operator in java . the difference is that dots are in front
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
