const View = require('./ttt-view');
const Game = require('../nodeSolution/game');

$( () => {
  const game = new Game();
  const rootEl = $('.ttt');
  new View(game, rootEl);
});
