const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let array = [];

  for (let i=1; i<=disksNumber; i++) {
 array.push(i);
  }
  let resultTurns = array.reduce((accumulator, item) => 2* (accumulator)+ 1, 0);
 
  let resultSeconds = Math.floor((resultTurns/turnsSpeed)*3600);
  let result = {};
  result.turns = resultTurns;
  result.seconds = resultSeconds;
  return result
}

module.exports = {
  calculateHanoi
};
