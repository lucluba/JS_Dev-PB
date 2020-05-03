const board = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
  ];
  const figures = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "-", "_"];
  
  function getRandonBoard() {
    const newBoard = [];
    const newFigures = figures.concat(figures);
  
  
    for(let j=0; newFigures.length>0; j++){
      const figure = newFigures.splice((Math.floor(Math.random() * newFigures.length)), 1);
      newBoard.push({
        id: j,
        sign: figure[0]
      });
    }
  
    return newBoard;
  }
  
  module.exports = {
    getRandonBoard
  };