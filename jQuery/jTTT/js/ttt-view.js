class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ((e) => {
      const $sq = $(e.currentTarget);
      this.makeMove($sq);
    }));
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;
    console.log(pos);

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("Invalid Move. Try Again.");
      return;
    }
    // $square.html(currentPlayer);
    $square.addClass(currentPlayer);
    $square.addClass("mark");

    if (this.game.winner()) {

    }
  }

  setupBoard() {
    for (let row = 0; row < 3; row++) {
      const $row = $("<ul>").addClass("row");
      for (let col = 0; col < 3; col++) {
        const $square =
          $("<li>").addClass("square").data("pos", [row, col]);
        $row.append($square);
      }
      this.$el.append($row);
    }
  }
}

module.exports = View;
