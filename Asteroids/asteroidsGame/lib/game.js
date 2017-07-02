const Bullet = require("./bullet.js");
const Ship = require("./ship.js");
const Asteroid = require("./asteroid");
const Util = require("./util");

const Game = function () {
  this.asteroids = [];
  this.bullets = [];
  this.ships = [];

  this.addAsteroids();
};

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 10;

Game.prototype.add = function (object) {
  if (object instanceof Asteroid) {
    this.asteroids.push(object);
  } else if (object instanceof Bullet) {
    this.bullets.push(object);
  } else if (object instanceof Ship) {
    this.ships.push(object);
  } else {
    throw "unknown type of object";
  }
};

Game.prototype.addAsteroids = function () {
  for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.add(new Asteroid({ game: this}));
  }
};

Game.prototype.addAsteroids = function () {
  for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.add(new Asteroid({ game: this}));
  }
};

Game.prototype.randomPosition = function() {
  return [
    Game.DIM_X * Math.Random(),
    Game.DIM_Y * Math.Random()
  ];
};

Game.prototype.allObjects = function () {
  return [].concat(this.ships, this.asteroids, this.bullets);
}; 

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  this.allObjects().forEach((object) => {
    object.draw(ctx);
  });
};


module.exports = Game;
