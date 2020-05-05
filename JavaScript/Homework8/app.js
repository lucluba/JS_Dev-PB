'useStrict';
const { getRandonBoard } = require("./board");
const Player = require("./Player");
const Game = require("./Game");

const board = getRandonBoard();

const min = Math.ceil(2);
const max = Math.floor(4);
const playersNum = Math.floor(Math.random() * (max - min + 1) + min);
const players = [];
for(let i=0; i<playersNum; i++){
   players.push(new Player(i+1));
}

const game = new Game(players, board);

game.play();