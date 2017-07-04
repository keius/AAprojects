class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (let tow = 0; tow < 3; tow++) {
      const $tower = $("<ul>").addClass("tower");
      for (let disk = 0; disk < 3; disk++) {
        const $disk = $("<li>").addClass("disk").attr({"pos": tow, "size": disk});
        $tower.append($disk);
      }
      this.$el.append($tower);
    }
  }

  render() {

  }
}


module.exports =  View;
