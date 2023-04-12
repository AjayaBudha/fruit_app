(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const fruitList = document.querySelector("#fruitSection ul");

function extractFruit(event) {
  event.preventDefault();
  addFruit(event.target.fruitInput.value);
  event.target.fruitInput.value = "";
}

function addFruit(fruit) {
  const li = document.createElement("li");
  li.textContent = fruit + "x";

  li.addEventListener("click", removeFruit, { once: true });
  fruitList.appendChild(li);
}

function removeFruit(e) {
  const choice = confirm("Are you sure?");
  choice ? e.target.remove() : "";
}

module.exports = { extractFruit };

},{}],2:[function(require,module,exports){
const { extractFruit } = require("./fruit");
const fruitForm = document.querySelector("#inputSection form");

fruitForm.addEventListener("submit", extractFruit);

},{"./fruit":1}]},{},[2]);
