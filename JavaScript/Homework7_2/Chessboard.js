class Chessboard {
    constructor(figureFactory) {
      this.board = this.createArray();
      this.gameplay = [];
      this.figureFactory = figureFactory;
      this.figures = ['king', 'queen', 'rook', 'bishop', 'knight'];
      this.capture = [];
    }
  
    createArray(){
      let arr = [];
      for(let i=0; i<8; i++){
        arr[i] = [];
        for(let j=0; j<8; j++){
          arr[i][j] = null;
        }
      }
      return arr;
    }
  
    addFigure(){
      let occured = false;
      do{
        let newX = Math.floor(Math.random() * this.board.length);
        let newY = Math.floor(Math.random() * this.board[0].length);
        const figure = this.figures[Math.floor(Math.random() * this.figures.length)];
    
        occured = this.gameplay.find( figure => figure.position.x===newX && figure.position.y===newY);
        
        if(!occured){
          let fig = this.figureFactory.getFigure(figure, newX, newY);
          this.gameplay.push(fig);
          this.board[newX][newY] = fig;
          return fig;
        }
      } while(occured);
    }
  
    checkForCapture(){
      let captures = [];
      this.gameplay.map( figure => {
        figure.moveRange.map( move => {
          let captured = this.gameplay.find( f => f.position.x===move.x && f.position.y===move.y);
         
          if(captured){
            if(figure !== captured) {
              const capturing = figure.name;
              const capt = captured.name;
              const {x,y} = captured.position;
              captures.push(`${capturing} to [${x}, ${y}], ${capt} captured`);
            }
          };
        })
      })
      return captures;
    }
  
    playGame(){
      do {
        const newFigure = this.addFigure();
        this.capture = this.checkForCapture();
      } while(this.capture.length===0)
      this.showArr();
      return this.capture;
    }
  
    showArr(){
      let rank = '';
      this.gameplay.forEach( figure => {
        this.board[figure.position.x][figure.position.y] = figure.sign;
      })
      console.log(`    A   B   C   D   E   F   G   H  `);
      let counter = 8;
      this.board.forEach(row => {
        rank = `${counter} `;
        row.forEach( cell => {
          if(cell === null){ rank += '|   ' }
          else{ rank += `| ${cell} `}
        })
        rank += `| ${counter}`;
        console.log(`  +---+---+---+---+---+---+---+---+`);
        console.log(rank);
        counter --;
      })
      console.log(`  +---+---+---+---+---+---+---+---+`);
      console.log(`    A   B   C   D   E   F   G   H  `);
    }
  }
  
  module.exports = Chessboard;