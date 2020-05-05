class Player {
    constructor(id){
      this.id = id;
      this.memory = {};
      this.actual = {
        card: null,
        pos: null
      }
      this.score = 0;
      this.cards = [];
    }
  
    firstTry(allowedPos){
      if(this.actual.card){
        if(!this.memory[this.actual.card]){
          this.addToMemory(this.actual.card, this.actual.pos);
        }
      }
      return this.getRandomPos(allowedPos);
    }
  
    secondTry(allowedPos){
      const myPos = allowedPos.filter( pos => pos !== this.actual.pos);
  
      if(this.memory[this.actual.card]){
        if(this.memory[this.actual.card][0]!==this.actual.pos){
          return this.memory[this.actual.card][0];
        } else if(this.memory[this.actual.card].length===2){
          return this.memory[this.actual.card][1];
        } else {
          this.addToMemory(this.actual.card, this.actual.pos);
          return this.getRandomPos(myPos);
        }
      } else {
          this.addToMemory(this.actual.card, this.actual.pos);
          return this.getRandomPos(myPos);
      }
    }
  
    getRandomPos(allowedPos){
      const idx = Math.floor(Math.random() * allowedPos.length);
      const newPos = allowedPos[idx];
      this.actual.pos = newPos;
      return newPos;
    }
  
    reverseCard(card){
      this.actual.card = card;
    }
  
    addToMemory(card, pos){
      if(this.memory[card]){
        this.memory[card][0]!==pos && this.memory[card].push(pos);
      } else {
        this.memory[card] = [pos];
      }
    }
  
    givePoint(card1, pos1, card2, pos2){
      this.score++;
      this.cards.push({card:card1, pos:pos1});
      this.cards.push({card:card2, pos:pos2});
    }
  
    showScore(){
      console.log(`Player_${this.id}, score: ${this.score}`);
      console.log(this.cards);
    }
  }
  
  module.exports = Player;