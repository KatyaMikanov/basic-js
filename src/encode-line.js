const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  if (str === '') {
    return '';
    } else {
      let arr = str.split('');
    let arrResult = [];
    let unic = [];
    unic[0]=arr[0];
    let count = 1;
    
    for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
    count = count + 1;
    if (i === (arr.length-1)) {unic.push(count);}
    } else {
    unic.push(count);
    unic.push(arr[i]); 
    count = 1;
    if (i === (arr.length-1)) {unic.push(count);}
    }
    }
    
    let res = [] ;
    for (let j=0; j<unic.length; j=j+2) {
    res.push(unic[j+1]);
    res.push(unic[j])
    }
    
    let result = [];
    for (let x=0; x<res.length; x++) {
      if (!(res[x] == 1)) {
        result.push(res[x]);
      }
    }
    return result.join('')
    }
}

module.exports = {
  encodeLine
};
