// -----------------------------------------------------------------------------
// || 7) Create a function the return one random element from given array. // use random function 
// -----------------------------------------------------------------------------

const array = [1,6,23,8,4,8,3,7];

function returnRandom (arr) {
  let random =  Math.floor(Math.random() * arr.length);
  return arr[random];
}

console.log(returnRandom(array));

// -----------------------------------------------------------------------------
// || 8) Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
// -----------------------------------------------------------------------------

const array = [1,6,23,8,4,8,3,7];

function giveLowestRandom (arr, attempts) {
  let randomNumber = returnRandom (arr);
  let min = randomNumber;

  for (let i=2; i<=attempts; i++){
    randomNumber = returnRandom (arr);
    if (min > randomNumber) min = randomNumber;
  }

  return min;
}

function returnRandom (arr) {
  let random =  Math.floor(Math.random() * arr.length);
  return arr[random];
}

console.log(  giveLowestRandom(array,7) );

// -----------------------------------------------------------------------------
// || 9) Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
// -----------------------------------------------------------------------------

const array = [1,6,23,8,4,8,3,7];

function returnRandomArray (arr) {
  const newArray = [];

  while (arr.length > 0) {
    let random = returnRandom(arr.length);
    let number = arr.splice(random, 1);
    newArray.push(number[0]);
  }

  return newArray;
}

function returnRandom (max) {
  return  Math.floor( Math.random() * max );
}

console.log( returnRandomArray(array) );

// -----------------------------------------------------------------------------
// || 10) Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
// -----------------------------------------------------------------------------

const array = [1,6,23,8,4,8,3,7];

function addOrSubItems (arr) {
  let sum = arr.reduce (function (accumulator, current) {
    if (Math.random() > 0.5) {
      return accumulator + current;
    } else {
      return accumulator - current;
    }
  })
  return sum;
}

console.log(addOrSubItems (array));

// -----------------------------------------------------------------------------
// || 11) Create a function that will return the current day name in Polish. 
// -----------------------------------------------------------------------------

let date = new Date();
let day = date.getDay();

function showDay (dayNr) {
  switch (dayNr) {
    case 0:
      return 'Sunday';
      break;
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
      break;
    default:
      return 'Day of No Day';
  }
}

console.log('Today is ' + showDay(day));

// -----------------------------------------------------------------------------
// || 12) Create a function that tells us how many days till Friday ☺
// -----------------------------------------------------------------------------

let date = new Date().getDay();

function calcDays (currDay, dayOfWeek) {
  return (dayOfWeek - currDay + 7) % 7;
}

function showTillFriday (currDay) {
  let daysLeft = calcDays(currDay, 5);

  if (daysLeft>=1) {
    console.log('To Friday left ' + daysLeft + (daysLeft===1 ? ' day!' : ' days!'));
  } else {
    console.log('Piątek!');
  }
}

showTillFriday(date);

// -----------------------------------------------------------------------------
// || 13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 
// -----------------------------------------------------------------------------

function calculateNumbers (x,y) {
    return {
      addition: x+y,
      subtraction: x-y,
      multiplication: x*y,
      division: x/y
    }
  }
  
  console.log(calculateNumbers(1,5));
