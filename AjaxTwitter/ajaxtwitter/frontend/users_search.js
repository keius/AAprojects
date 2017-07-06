const Util = require('./api_util.js');

class UsersSearch {
  constructor($el) {
    this.$input = $($el.find("input"));
    this.$ul = $($el.find("ul"));
    this.$el = $el;
    this.$input.on("input", this.handleInput.bind(this));
  }

  handleInput(event) {
    Util.searchUsers(event.target.value)
    .then(users => this.renderResults(users));
  }

  renderResults(users) {
    console.log('hi');
    this.$ul.empty();
    users.forEach ( user => {
      let $a = $('<a>').attr('href', `user/${user.id}`).text(user.username);
      let $li = $('<li>').append($a);
      this.$ul.append($li);
    });
  }

}

module.exports = UsersSearch;
