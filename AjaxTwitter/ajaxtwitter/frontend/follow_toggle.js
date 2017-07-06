const Util = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    this.userId = $el.data('userId');
    this.followState = $el.data('initialFollowState');
    this.$el = $el;
    this.render();
    this.$el.click (this.handleClick.bind(this));
  }

  render() {
    if (this.followState === 'unfollowing' || this.followState === 'following') {
      // this.$el.data('disabled', true);
    } else {
    if (this.followState === 'unfollowed') {
      this.$el.html('Follow!');
    } else {
      this.$el.html('Unfollow!');
    }
    // this.$el.data('disabled', false);
    }
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this);
    // this.$el.data('disabled', true);
    if (this.followState === 'unfollowed') {
      // this.followState = 'following';
      Util.followUser(this.userId)
        .then(this.followState = 'followed')
        .then(() => this.render());
    } else {
      // this.followState = 'unfollowing';
      Util.unfollowUser(this.userId)
        .then(this.followState = 'unfollowed')
        .then(() => this.render());
    }
  }




}



module.exports = FollowToggle;
