// -----------------------------------------------------------------------------
// || 1) Extend String type with the reverse() function. The function is to reverse the value of the string on which it was called.
// -----------------------------------------------------------------------------

String.prototype.reverse = function() {
    return this.split("").reverse().join("");
  };
  
  console.log("kot".reverse());

// -----------------------------------------------------------------------------
// || 2) Extend Number type with the reverse() function. The function is to reverse the value of the Number on which it was called.
// -----------------------------------------------------------------------------

Number.prototype.reverse = function() {
    return this * -1;
  };
  
  console.log((-55).reverse());
  

// -----------------------------------------------------------------------------
// || 3) Based on included JSON file. 
/* Create a function that will return Json from the file. a
Create a structures to hold data from the file. b
Map data from function a to structure from b.
Create object that will give us data about:
How much money was spend in 2014
What company was earning how much
What type on transaction was having what spending’s.
Values of the spending in each month
Values of the spending in each day of the week */
// -----------------------------------------------------------------------------