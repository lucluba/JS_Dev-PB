// -----------------------------------------------------------------------------
// || 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.
// -----------------------------------------------------------------------------

const iifeObject = (() => {
    let value = null;
  
    const showValue = () => {
      if (value) {
        console.log(value);
      } else {
        console.log("Set value first");
      }
    };
  
    const setValue = val => {
      if (typeof val === "string" || typeof val === "number") {
        value = val;
      } else {
        value = null;
      }
    };
  
    const reverseValue = () => {
      if (typeof value === "string") {
        let newVal = value.split("");
        newVal.reverse();
        value = newVal.join("");
      } else if (typeof value === "number") {
        value *= -1;
      }
    };
  
    return {
      showValue,
      setValue,
      reverseValue
    };
  })();
  
  iifeObject.showValue();
  
  iifeObject.setValue(11);
  iifeObject.reverseValue();
  iifeObject.showValue();
  
  iifeObject.setValue("kot");
  iifeObject.reverseValue();
  iifeObject.showValue();
  
  iifeObject.setValue([1, 2, 3]);
  iifeObject.showValue();
  
  iifeObject.value = 1;
  iifeObject.showValue();

// -----------------------------------------------------------------------------
// || 2) Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside (x and y) and a function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous sentence and a calculate() function that makes calculation and returns its value. 
// -----------------------------------------------------------------------------

const calcObject = (() => {
    let x, y;
    let mathOperation = null;
  
    const setOperation = (paramX, paramY, operationFn) => {
      if (typeof paramX === "number" && typeof paramY === "number") {
        x = paramX;
        y = paramY;
      } else {
        x = null;
        y = null;
      }
  
      if (typeof operationFn === "function") {
        mathOperation = operationFn;
      } else {
        mathOperation = null;
      }
    };
  
    const calculate = () => {
      if (x && y && mathOperation) {
        return mathOperation(x, y);
      } else {
        return "Set parameters first";
      }
    };
  
    return {
      setOperation,
      calculate
    };
  })();
  
  const add = (x, y) => x + y;
  const sub = (x, y) => x - y;
  const multi = (x, y) => x * y;
  const div = (x, y) => x / y;
  
  calcObject.setOperation();
  console.log(calcObject.calculate());
  
  calcObject.setOperation("", "", div);
  console.log(calcObject.calculate());
  
  calcObject.setOperation(4, 4, (x, y) => x + y);
  console.log(calcObject.calculate());
  
  calcObject.setOperation(4, 3, multi);
  console.log(calcObject.calculate());


// -----------------------------------------------------------------------------
// || 3) Create an array (by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}} 
//Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8},…..]
// -----------------------------------------------------------------------------

const objectsArray = [
  {
    x: 1,
    y: 6
  },
  {
    x: 8,
    y: 2
  },
  {
    x: 77,
    y: 9
  },
  {
    x: 13,
    y: 8
  },
  {
    x: 0,
    y: 33
  }
];

const baseObject = { 
  x: 0,
  y: 0,

  sum: function (){ 
    return this.x + this.y;
  }};

  objectsArray.forEach( object => console.log(baseObject.sum.call(object)) );

// -----------------------------------------------------------------------------
// || 4) Given an array of objects, for each object call operation() function in context of next object. If object is last, got back to start of the array for operation function. In loop;
/*[
    {
        x: 1,
        y: 'object one value',
        operation: () => 'object one prafix' + this.x + this.y
    },
    {
        x: 2,
        y: 'object two value',
        operation: () => 'object two prefix' + this.x + this.y
    },
    {
        x: 3,
        y: 'object three value',
        operation: () => 'object three prefix' + this.x + this.y
    },
] */
// -----------------------------------------------------------------------------


