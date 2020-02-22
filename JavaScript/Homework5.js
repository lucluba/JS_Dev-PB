// -----------------------------------------------------------------------------
// || 1. Write a program that prints all prime numbers in given range. Take sub from 1-100.
// -----------------------------------------------------------------------------

(function iterateRange () {
    const start = 1;
    const end = 100;
    const primeNumbers = [];
  
    for (let i=start; i<=end; i++) {
      if (checkIsPrime (i)) {
        primeNumbers.push(i);
      }
    }
    printNumbers (primeNumbers);
  })();
  
  function checkIsPrime (num) {
    for (let i=2; i<num; i++) {
      if (num % i === 0) { return false }
    }
    return true;
  }
  
  function printNumbers ( numArr = [] ) {
    console.log(numArr.join(' '));
  }

// -----------------------------------------------------------------------------
// || 2. Write a guessing game where the user has to guess a secret number.
// -----------------------------------------------------------------------------


(function playGame () {
    let min = 1;
    let max = 100;
    const secretNum = getRandom(min, max);
    let playerTry = guessNumber(min, max);
    let counter = 1;
    let gameCounter = 0;
  
    while (secretNum !== playerTry && gameCounter < 1000) {
      gameCounter++;
        if ( tryIsBigger(playerTry, secretNum) ) { 
          showGameMessage( playerTry, 'large');
          max = playerTry;
        } else {
          showGameMessage( playerTry, 'small'); 
          min = playerTry;
        };
        playerTry = guessNumber(min, max);
        counter ++;
    }
    showWinMessage(playerTry, counter);
  })()
  
  function tryIsBigger ( num, secret ) {
    if (num > secret) { return true }
    else { return false }
  }
  
  function guessNumber (min, max) {
    const num = ((max - min) / 2) + min;
    return Math.floor(num)
  }
  
  function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function showGameMessage (nr, adjective) {
    console.log(`${nr} is too ${adjective}`);
  }
  
  function showWinMessage (num, counter) {
    console.log(`${num}
  Wou win!!!
  You guessed it in ${counter} tries`);
  }

// -----------------------------------------------------------------------------
// || 3. Write a function that rotates a list by k elements.  Try solving this without creating a copy of the list.
// -----------------------------------------------------------------------------

const process = require('process');
const [,,rotateValue] = process.argv;

const array = [1,2,3,4,5,6];

(function rotateArray (arr, value=3) {
  const resultArr = connectArrays(arr, removeFromFront(arr, value));
  showResult(resultArr);
})(array, rotateValue);

function showResult (resultMessage) {
  console.log(resultMessage);
}

function removeFromFront (arr, counter) {
  return arr.splice(0, counter);
}

function connectArrays (arr1, arr2) {
  return arr1.concat(arr2);

// -----------------------------------------------------------------------------
// || 4. Write a class that prints the list of the first n Fibonacci numbers. 
// -----------------------------------------------------------------------------

class FibonacciSequence {
    _fibonacciSeries;
  
    get fibonacciSeries () {
      return this._fibonacciSeries;
    }
  
    set fibonacciSeries (num) { 
      this._fibonacciSeries = [1];
      for (let i=1; i<num; i++) {
        const nextFibonacciNum = sum(...giveLastTwoNum(this._fibonacciSeries));
        this._fibonacciSeries.push(nextFibonacciNum);
      }
    }
  }
  
  const fibonacci = new FibonacciSequence();
  fibonacci.fibonacciSeries = 10;
  console.log(fibonacci.fibonacciSeries);
  
  function sum (a, b=0) {
    return a+b;
  }
  
  function giveLastTwoNum (arr) {
    return [arr[arr.length-1], arr[arr.length-2]];
  }
}

// -----------------------------------------------------------------------------
// || 5. Write a code that takes a number and returns a list of its digits.
// -----------------------------------------------------------------------------

const process = require('process');
const [,,number] = process.argv;

(function giveDigits ( number=0 ) {
  console.log(findUniqDigits(convertToDigitsArr(number)));
})(number);

function convertToDigitsArr (number) {
  const numString = number.toString();
  const numArray = changeToNumbers(numString);
  return [...numArray];
}

function changeToNumbers ([...str]) {
  return str.map( letter => Number(letter));
}

function findUniqDigits (arr) {
  return arr.reduce( (acc, curr) => {
    if ( !orContains(acc, curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

function orContains (arr, nr) {
  return arr.includes(nr);
}

// -----------------------------------------------------------------------------
// || 6. Write function that translates a text to Pig Latin and back. 
// -----------------------------------------------------------------------------

