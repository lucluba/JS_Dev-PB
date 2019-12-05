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

const transactionInfo = (function(){
    let transactionsArray = [];
  
    const setObjects = (filename) => {
        const dataObjects = require(filename);
        
        function DetailsOfPayent(type, comp, payDate) {
          this.type = type;
          this.company = comp;
          let [day, month, year] = payDate.split("-");
          this.date = new Date(year, month-1, day);
        }
        
        function Transaction(i, id, cost, type, comp, payDate) {
          this.index = i;
          this._id = id;
          this.cost = Number(cost);
          this.detailsOfPayent = new DetailsOfPayent(type, comp, payDate);
        }
        
        transactionsArray = dataObjects.map(dataObject => {
          let {index, _id, cost, detailsOfPayent: {Type, company, date}} = dataObject;
          return new Transaction(index, _id, cost, Type, company, date);
        })
    };
  
    function reduceArray(arr, data, callback) {
      return arr.reduce( (acc, curr) => { 
        let value;
        callback ? value = callback.call(curr.detailsOfPayent[data]) 
                 : value = curr.detailsOfPayent[data];
        if (value in acc) {
          acc[value] += curr.cost;
        }
        else {
          acc[value] = curr.cost;
        }
        return acc;
      }, {});
    }
  
    function roundPropInObject(obj) {
      for (let property in obj) {
        obj[property] = Number(obj[property].toFixed(2));
      }
      return obj;
    }
  
    function showTransactionsData () {
      return {
        companiesGains: roundPropInObject(reduceArray(transactionsArray, "company")),
        spendingByTransaction: roundPropInObject(reduceArray(transactionsArray, "type")),
        spendingByYear: roundPropInObject(reduceArray(transactionsArray, "date", Date.prototype.getFullYear)),
        spendingByMonth: roundPropInObject(reduceArray(transactionsArray, "date", Date.prototype.getMonth)),
        spendingByDay: roundPropInObject(reduceArray(transactionsArray, "date", Date.prototype.getDay)),
      }
    }
  
    return {
      setObjects,
      showTransactionsData 
    }
  })();
  
  transactionInfo.setObjects("./Data.json");
  console.log(transactionInfo.showTransactionsData());