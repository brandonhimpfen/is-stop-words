const isStopWord = require('./index');

console.log(isStopWord('the')); // Output: true
console.log(isStopWord('and')); // Output: true
console.log(isStopWord('and@')); // Output: true
console.log(isStopWord('apple')); // Output: false
console.log(isStopWord('apple@')); // Output: false