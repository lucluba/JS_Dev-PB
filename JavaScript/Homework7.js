// -----------------------------------------------------------------------------
// || 1. Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure. The values in the array are clues. Each cell contains an integer between 11 and 55; for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell containing the next clue. Starting in the upper left corner (at 1,1), use the clues to guide your search of the array. (The first three clues are 11, 34, 42). The treasure is a cell whose value is the same as its coordinates. Your program should output the cells it visits during its search, and a message indicating where you found the treasure.
// -----------------------------------------------------------------------------


'use strict';

const map = [ [null, null, null, null, null, null],
              [null, 34, 21, 32, 41, 25],
              [null, 14, 42, 43, 14, 31],
              [null, 54, 45, 52, 42, 23],
              [null, 33, 15, 51, 31, 35],
              [null, 21, 52, 33, 13, 23] ];

const start = 11;

class OneStep {
  constructor(){}
  goForward(map, where) {
    const row = Math.floor(where / 10);
    const column = where % 10;
    return map[row][column];
  }
}

class Pirat {
  constructor(oneStep) {
    this.oneStep= oneStep;
  }

  searchTreasure(map, start){
    let trip = start.toString();
    let next = null;

    do {
      if (next) { start = next };
      next = this.oneStep.goForward(map, start);
      trip += ` -> ${next}`;
    } while (start !== next)
    
    return `Trip: ${trip}
Treasure is on field ${next}`;
  }
}

const step = new OneStep();
const pirat = new Pirat(step);
const treasure = pirat.searchTreasure(map, start);
console.log(treasure);