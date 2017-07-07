const DOMNodeCollection = require("./dom_node_collection");

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
