// -----------------------------------------------------------------------------
// || 1. Write a program that finds the longest palindromic substring of a given string.
// -----------------------------------------------------------------------------


'use strict';

const wordsArray = [ 'karakis', 'baerren', 'kajak', 'inni'];

const utils = (() => {
  function findPalindroms (char, index, arr) {
    const endIndex = arr.lastIndexOf(char);
    if ( index !== endIndex ){
      let word = arr.slice(index, endIndex+1);
      let palindrom = word.reverse();
      if (word === palindrom) {
        return word.join('');
      }
    }
  }
  
  function findLongestWord (arr) {
    const sortedArr =  arr.sort( (a,b) => b.length - a.length);
    return sortedArr[0];
  }

  return {
    findPalindroms,
    findLongestWord
  }
})();

class CheckPalindromes {
  constructor( findPalindroms, findLongestWord ){
    this.findPalindroms = findPalindroms;
    this.findLongestWord = findLongestWord;
  }

  checkTheWord (text) {
    const palindromsArr = text.toLowerCase().split("").map(this.findPalindroms);
    return this.findLongestWord(palindromsArr);
  }
}

const checkPalindromes = new CheckPalindromes(utils.findPalindroms, utils.findLongestWord);

const palindroms = wordsArray.map( word => checkPalindromes.checkTheWord(word));
console.log(palindroms);

// -----------------------------------------------------------------------------
// || 2. Given two strings, write a program that efficiently finds the longest common subsequence.
// -----------------------------------------------------------------------------

'use strict';

const first = 'karol';
const second = 'rolki';

const utils = (() => {
  function findSameChar(fn) {
    return function second( word1, word2 ){
      return word1.split('').map( (ch, idx) => {
        const index = word2.indexOf(ch);
        if (index !== -1 && index !== idx) {
          return fn(word1.substring(idx), word2.substring(index));
        } else {
          return 'No subsequence';
        }
      })
    };
  }

  function findSubstr (word1, word2) {
    if (word1 === word2) {
      return word1;
    } else {
      return word1.split('').reduce( (acc, curr, idx) => {
        if (curr === word2[idx]) { acc += curr }
        return acc;
      }, '');
    }
  }

  function findLongestWord (arr) {
    const sortedArr =  arr.sort( (a,b) => b.length - a.length);
    return sortedArr[0];
  }

  return {
    findSameChar,
    findSubstr,
    findLongestWord
  }
})();

class Subsequence {
  constructor(findSubstr, findChar, findLongestWord){
    this.findSubstr = findSubstr;
    this.findChar = findChar;
    this.findLongestWord = findLongestWord;
  }

  findSubstring(word1, word2) {
    const firstFunc = this.findChar(this.findSubstr);
    const substrArr = firstFunc(word1, word2);
    return  this.findLongestWord(substrArr);
  }
}

const finder = new Subsequence( utils.findSubstr, utils.findSameChar, utils.findLongestWord );

console.log(finder.findSubstring(first, second));

// -----------------------------------------------------------------------------
// || 3. Write a code that multiplies two matrices together. Dimension validation required.
// -----------------------------------------------------------------------------



'use strict';
const first = [ [2, 1, 3],
                [-1, 4, 0]];
const second = [ [1, 3, 2],
                 [-2, 0, 1],
                 [5, -3, 2]];

const utils = (() => {
  function validateMatrices (first, second) {    
    if (first[0].length === second.length) { return true }
    else { return false };
  }

  function calcItem(arr2) {
    return function reducer (sum, item, idx){
      return sum += item * arr2[idx];
    }
  }

  function iterateColumn (arr, columnNr) {  
    return arr.map( row => row[columnNr] );
  }

  return {
    validateMatrices,
    calcItem,
    iterateColumn
  }
})();

class MultiRowByColumn {
  constructor(iterateColumn, calcItem){
    this.iterateColumn = iterateColumn;
    this.calcItem = calcItem;
  }

  multiplyItem(row, arr2, colNr){
    const column = this.iterateColumn(arr2, colNr);  
    return row.reduce( this.calcItem(column), 0);
  }
}

class MultiplyMatrices {
  constructor(multiItem, validateMatrices){
    this.multiItem = multiItem;
    this.validateMatrices = validateMatrices;
  }

  multiply(first, second) {
    if ( this.validateMatrices(first, second) ){
      const resultMatrice = [[],[]];
      first.forEach( (row, idx) => {  
        for (let i=0; i<second[0].length; i++){   
          resultMatrice[idx].push(this.multiItem(row, second, i));
        }
      });
      return resultMatrice;
    } else {
      return 'Matrices cannot be multiplied';
    }
  }
}

const multiRowByColumn = new MultiRowByColumn(utils.iterateColumn, utils.calcItem);

const multiplyMatries = new MultiplyMatrices(
  multiRowByColumn.multiplyItem.bind(multiRowByColumn),
  utils.validateMatrices
)
const res = multiplyMatries.multiply(first, second);

res.forEach( row => {
  console.log(row);
})