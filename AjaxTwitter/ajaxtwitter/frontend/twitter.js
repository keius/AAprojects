const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$( () => {
  const $followToggles = $('button.follow-toggle');
  $followToggles.each( (idx, el) => {
    new FollowToggle($(el));
  });
});

$(() => {
  const $usersSearch = $('nav.users-search');
  $usersSearch.each( (idx, el) => {
    new UsersSearch($(el));
  });
});
