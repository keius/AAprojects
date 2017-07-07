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

const DOMNodeCollection = __webpack_require__(1);

function $l(arg) {
  if (arg instanceof HTMLElement) {
    let selected = Array.from(document.getElementById(arg));
    return new DOMNodeCollection(selected);
  } else {
    let selected = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(selected);
  }
}
window.$l = $l;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(str) {
    if (!str) {
      return this.htmlElements[0].innerHTML;
    } else {
      this.htmlElements.forEach (function(el) { el.innerHTML = str; });
    }
  }

  empty() {
    this.htmlElements.forEach (function(el) { el.innerHTML = ""; });
  }

  append(arg) {
    if (arg instanceof HTMLElement) {
      // let outer = document.createElement(args.outerHTML);
      this.htmlElements.forEach (function(el) { el.innerHTML += arg.outerHTML; });
    } else if (arg instanceof String){
      // let outer = document.createElement(args)
      this.htmlElements.forEach (function(el) { el.innerHTML += arg; });
    } else {
      let outer = "";
      arg.htmlElements.forEach (el => outer.concat(el.outerHTML));
      this.htmlElements.forEach (function(el) { el.innerHTML += outer; });
    }
  }

  attr(key, val) {
    if (!val) {
      const attributes = [];
      this.htmlElements.forEach (el => attributes.push(el.getAttribute(key)));
      return attributes;
    } else {
      this.htmlElements.forEach (function(el) { el.setAttribute(key, val); });
    }
  }

  addClass(name) {
    this.htmlElements.forEach (function(el) { el.setAttribute("class", name); });
  }

  removeClass() {
    this.htmlElements.forEach (function(el) { el.removeAttribute("class"); });
  }

  children() {
    let childrenElements = [];
    this.htmlElements.forEach (function(el) {
      let children = Array.from(el.children);
      childrenElements = childrenElements.concat(children); });
    return new DOMNodeCollection(childrenElements);
  }

  parent() {
    let parentElements = [];
    this.htmlElements.forEach (function(el) {
      parentElements.push(el.parentElement);
    });
    return new DOMNodeCollection(parentElements);
  }

  find(selector) {
    let matchingElements = [];
    this.htmlElements.forEach (function(el) {
      let matching = Array.from(el.querySelectorAll(selector));
      matchingElements = matchingElements.concat(matching);
    });
    return new DOMNodeCollection(matchingElements);
  }

  remove() {
    this.htmlElements.forEach (function(el) {
      el.outerHTML = "";
    });
  }

  on(eventType, callBack) {
    this.htmlElements.forEach (function(el) {
      el.addEventListener(eventType, callBack);
      el['callback'] = callBack;
    });
  }

  off(eventType) {
    this.htmlElements.forEach (function(el) {
      let cb = el["callback"];
      el.removeEventListener(eventType, cb);
    });
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);