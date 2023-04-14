const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arrayString = n.toString();
    let fromSliced;
    let arrayFromSliced = [];
     for (let i=0; i<arrayString.length; i++) {
       fromSliced = arrayString.replace(arrayString[i], '');
       arrayFromSliced.push(Number(fromSliced))
     }
    return Math.max.apply(null, arrayFromSliced)
    }

module.exports = {
  deleteDigit
};
