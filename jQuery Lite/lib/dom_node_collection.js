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
