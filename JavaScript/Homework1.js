// -----------------------------------------------------------------------------
// || 1)	From years in array check for leap years [1974, 1900, 1985, 2000] ||
// -----------------------------------------------------------------------------

let years = [1974, 1900, 1985, 2000];
let leapYears = [];
let j=0;

for(let i=0; i<years.length; i++){
    if( (years[i]%4 == 0 && years[i]%100 != 0) || years[i]%400 == 0){
        leapYears[j] = years[i];
        j++;
    }
}

if(leapYears.length !=0){
    console.log("Leap years are: ")
    console.log(leapYears.toString());
}else { 
    console.log("No leap years in given array"); 
}


// -------------------------------------
// || 2)	Calculate factorial of 7. ||
// -------------------------------------

// let n = 7;
// let fact = n;

// if(n < 0){
//     console.log("Choose positive integer!");
// }else if(n === 0){
//     fact = 1;
//     console.log("Factorial of n=" + n + " is: " + fact);
// }else {
//     for(let i = n-1; i > 0; i--){
//         fact = fact * i;
//     }
//     console.log("Factorial of n=" + n + " is: " + fact);
// }


// -----------------------------------------------------------------------------
// 3)	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
// -----------------------------------------------------------------------------

// let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;

// for(let i=0; i < numbers.length; i++){
//     if(numbers[i]%2 != 0){
//         sum =+ numbers[i];
//     }
// }

// console.log("Sum of array's odd items is: " + sum);


// -----------------------------------------------------------------------------
// 4)	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
// -----------------------------------------------------------------------------

// let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// let bufor;
// let min = numbers[0];
// let max = numbers[0];

// for(let i=1; i<numbers.length; i++){
    
//     bufor = numbers[i];
//     if(min > bufor){
//         min = bufor;
//     } else if (max < bufor){
//         max = bufor;
//     }
// }

// console.log('The highest value is: ' + max + "  and the lowest value is: " + min);


// -----------------------------------------------------------------------------
// 5)	Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 
// -----------------------------------------------------------------------------

// let names = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
// let bufor;
// let num = 0;
// let j;

// for(let i=0; i<names.length; i++){
//     bufor = names[i].length;
//     if (bufor > num){
//         num = bufor;
//         j = i;
//     }
// }
// console.log("The longest string is: " + names[j]);


// -----------------------------------------------------------------------------
// 6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 
// -----------------------------------------------------------------------------

// let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// let bufor;
// let index = [];
// let k = 0;

// bufor = numbers[0];

// for(let i=1; i < numbers.length; i++){
//     if(numbers[i] > bufor){
//         bufor = numbers[i];
//     }
// }

// for(let j=0; j < numbers.length; j++){
//     if(numbers[j] === bufor){
//         index[k] = j;
//         k++;
//     }
// }

// console.log('Indexes of the highest value: ' + index);


// -----------------------------------------------------------------------------
// 7)	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
// -----------------------------------------------------------------------------

// let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// let avg;
// let sum = 0;
// let q = 0;

// for(let i=0; i < numbers.length; i++){
//     if(numbers[i]%2 === 0){
//         sum = sum + numbers[i];
//         q++;
//     }
// }

// avg = sum / q;

// console.log("Average value of array's even numbers: " + avg);


// -----------------------------------------------------------------------------
// 8)	Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// -----------------------------------------------------------------------------

// let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;
// let q = 0;
// let avg;

// for(let i=2; i < numbers.length; i +=2){
//     sum = sum + numbers[i];
//     q++;
// }

// avg = sum / q;

// console.log("Average value of items at even indexes: " + avg);


// -----------------------------------------------------------------------------
// 9)	With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
// -----------------------------------------------------------------------------

// let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;

// for(let i=0; i < numbers.length; i++){
//     if(numbers[i]%2 === 0){
//         sum = sum + numbers[i];
//         console.log(sum);
//     } else {
//         sum = sum - numbers[i];
//         console.log(sum);
//     }
// }
