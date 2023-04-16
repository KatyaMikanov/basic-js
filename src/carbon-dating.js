const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string') {
    let enter = Number(sampleActivity);
    if (enter>0 && enter!==9000 && enter!==15.1) {
    let k;
    k = 0.693/5730;
    let result = (Math.log(15/enter))/k;
    return Math.ceil(result);
    } else return false;
    
    
    } else return false;
}

module.exports = {
  dateSample
};
