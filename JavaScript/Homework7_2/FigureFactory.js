class Figure {
    constructor(a,b){
      this.position = {x: a, y: b};
      this.moveRange = [];
      this.sign;
      this.name;
    }
  }
  
  class King extends Figure {
    constructor(a, b) {
      super(a, b);
      super.moveRange = this.setMove();
      super.sign = '\u2654';
      super.name = 'King';
    }
    setMove(){
      let move = [];
      for(let i=this.position.x-1; i<=this.position.x+1; i++){
        for(let j=this.position.y-1; j<=this.position.y+1; j++){
          if(i>-1 && i<8 && j>-1 && j<8){
            move.push({x:i,y:j});
          }
        }
      }
      return move;
    }
  }
  
  class Queen extends Figure {
    constructor(a, b) {
      super(a, b);
      super.moveRange = this.setMove();
      super.sign = '\u2655';
      super.name = 'Queen';
    }
    setMove(){
      let move = [];
      for(let i=0; i<8; i++){
        move.push({x:this.position.x,y:i});
        move.push({x:i,y:this.position.y});
      }
      let i = 0;
      let j = this.position.x - this.position.y;
  
      while(i<8 && j<8){
        if(j>-1){
          move.push({x:j,y:i});
        }
        i++;
        j++;
      }
  
      i = 0;
      j = this.position.x + this.position.y;
  
      while(i<8 && j>-1){
        if(j<8){
          move.push({x:j,y:i});
        }
        i++;
        j--;
      }
      return move;
    }
  }
  
  class Rook extends Figure {
    constructor(a, b) {
      super(a, b);
      super.moveRange = this.setMove();
      super.sign = '\u2656';
      super.name = 'Rock';
    }
    setMove(){
      let move = [];
      for(let i=0; i<8; i++){
        move.push({x:this.position.x,y:i});
        move.push({x:i,y:this.position.y});
      }
  
      return move;
    }
  }
  
  class Bishop extends Figure {
    constructor(a, b) {
      super(a, b);
      super.moveRange = this.setMove();
      super.sign = '\u2657';
      super.name = 'Bishop';
    }
    setMove(){
      let move = [];
      let i = 0;
      let j = this.position.x - this.position.y;
  
      while(i<8 && j<8){
        if(j>-1){
          move.push({x:j,y:i});
        }
        i++;
        j++;
      }
  
      i = 0;
      j = this.position.x + this.position.y;
  
      while(i<8 && j>-1){
        if(j<8){
          move.push({x:j,y:i});
        }
        i++;
        j--;
      }
  
      return move;
    }
  }
  
  class Knight extends Figure {
    constructor(a, b) {
      super(a, b);
      super.moveRange = this.setMove();
      super.sign = '\u2658';
      super.name = 'Knight';
    }
    setMove(){
      let move = [];
      for(let i=-2; i<=2; i++){
        let j;
        i%2===0 ? j=1 : j=2;
        if(i!==0){
          const posY = this.position.y+i;
          const posX1= this.position.x-j;
          const posX2 = this.position.x+j;
          
          if(posY>-1 && posY<8 && posX1>-1 && posX1<8){
            move.push({x:posX1,y:posY});
          } 
          if(posY>-1 && posY<8 && posX2>-1 && posX2<8){
            move.push({x:posX2,y:posY});
          }
        }
      }
      return move;
    }
  }
  let instance = null;
  
  class FigureFactory {
    constructor() {
      if (instance) {
        return instance;
      }
        instance = this;
        return instance;
    }
      getFigure(figure, a, b){
        figure = figure.toLowerCase();
        let returnedObject = null;
        
        if(a<0 || a>7 || b<0 || b>7) {
          throw new Error('Bad position');
        }
        if(figure==="king"){
          returnedObject = new King(a, b);
        } else if(figure === "queen"){
          returnedObject = new Queen(a, b);
        } else if(figure === "rook"){
          returnedObject = new Rook(a, b);
        } else if(figure === "bishop"){
          returnedObject = new Bishop(a, b);
        } else if (figure === "knight"){
          returnedObject = new Knight(a, b);
        } else {
          throw new Error('Bad figure type');
        }
        return returnedObject;
      }
    }
  
  module.exports =  FigureFactory;