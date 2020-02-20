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


// -----------------------------------------------------------------------------
// || 3. Write a function that rotates a list by k elements.  Try solving this without creating a copy of the list.
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// || 4. Write a class that prints the list of the first n Fibonacci numbers. 
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// || 5. Write a code that takes a number and returns a list of its digits.
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// || 6. Write function that translates a text to Pig Latin and back. 
// -----------------------------------------------------------------------------


