const Game = require("./game");
const GameView = require("./gameView");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsById("asteroids")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  canvasEl.fillStyle("yellow");
  canvasEl.fillRect(0, 0, 500, 500);
});
