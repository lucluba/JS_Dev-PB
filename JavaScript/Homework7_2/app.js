'use strict';
const FigureFactory = require("./FigureFactory");
const Chessboard = require("./Chessboard");

const figureFactory = new FigureFactory();
const board = new Chessboard(figureFactory);
const game = board.playGame();
console.log(game);