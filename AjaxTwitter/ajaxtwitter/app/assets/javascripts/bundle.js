/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);
const UsersSearch = __webpack_require__(3);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(2);

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {


const APIUtil = {

  followUser: id =>
    $.ajax({
      type: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'json',
    }),

  unfollowUser: id =>
     $.ajax({
      type: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json',
    }),

  searchUsers: queryVal =>
    $.ajax({
      type: 'GET',
      url: `/users/search`,
      dataType: 'json',
      data: {query: queryVal}
    })


};

module.exports = APIUtil;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(2);

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map