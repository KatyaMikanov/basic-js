const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (Array.isArray(members)) {
    if (members.length > 0) {
      let resultArray;
      let result;
      let letterFirst;
      let letterUp;
      let wordArray;
      let arrayFirstLetter = [];
      for (let i = 0; i < members.length; i++) {
        if (typeof (members[i]) === "string") {
          wordArray = members[i].split('');
          letterFirst = wordArray.find(item => item !== ' ');
          letterUp = letterFirst.toUpperCase();
          arrayFirstLetter.push(letterUp);
          resultArray = arrayFirstLetter.sort();
          result = resultArray.join('');
        }
      }
      return result;
    } else return false;
  } else return false;
}

module.exports = {
  createDreamTeam
};
