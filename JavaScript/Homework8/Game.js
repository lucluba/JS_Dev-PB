class Game {
    constructor(players, board){
      this.board = board;
      this.allowedPos = this.board.map( f => f.id );
      this.players = players;
    }
  
    play(){
      while(this.allowedPos.length > 0){
        this.players.forEach( player => {
          if(this.allowedPos.length<1) return;
      
          const pos1 = player.firstTry(this.allowedPos);
          const card1 = this.board[pos1].sign;
          player.reverseCard(card1);
    
          const pos2 = player.secondTry(this.allowedPos);
          const card2 = this.board[pos2].sign;
          player.reverseCard(card2);
    
          if(card1===card2){
            player.givePoint(card1,pos1, card2,pos2);
            this.allowedPos = this.allowedPos.filter( pos => pos !== pos1 && pos !== pos2);
          }   
        })
      }
      this.showResult();
    }
  
    showResult(){
      console.log(this.board);
      this.players.forEach( player => player.showScore());
    }
  }
  
  module.exports = Game;