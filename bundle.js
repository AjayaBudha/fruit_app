(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const fruitList = document.querySelector("#fruitSection ul");
const fruitNutrition = document.querySelector("#nutritionSection p");
const errMsg = document.querySelector("#errorMSG p");
let totalCal = 0;
function extractFruit(event) {
  event.preventDefault();
  //addFruit(event.target.fruitInput.value);
  fetchFruitData(event.target.fruitInput.value);
  event.target.fruitInput.value = "";
}

function addFruit(fruit) {
  const li = document.createElement("li");
  li.textContent = `${fruit.name} has ${fruit.nutritions.calories} calories.`;

  li.addEventListener("click", removeFruit, { once: true });
  fruitList.appendChild(li);

  //add calories
  addCalories(fruit.nutritions.calories);
}
//add the calories
function addCalories(cal) {
  totalCal += cal;
  fruitNutrition.textContent = `${totalCal} calories`;
  if (cal) {
    fruitNutrition.classList.add("total");
  }
}
function removeFruit(e) {
  const choice = confirm("Are you sure?");
  choice ? e.target.remove() : "";

  //text of the thing youre deleting
  caloriesText = e.target.textContent;
  //regex to get the calories number of the item deleted
  cal = parseInt(caloriesText.match(/(\d+)/));

  addCalories(-cal);
}

function fetchFruitData(fruit) {
  fetch(`https://fruity-api.onrender.com/fruits/${fruit}`)
    .then((resp) => resp.json())
    .then((data) => {
      addFruit(data);
      console.log("name", data.name);
      console.log("nutrition", data.nutritions.calories);
    })
    .catch((e) => {
      console.log(e);

      errMsg.classList.add("errNote");
      errMsg.textContent = "das da wrong fruit";
    });
}

module.exports = { extractFruit };

},{}],2:[function(require,module,exports){
const { extractFruit } = require("./fruit");
const fruitForm = document.querySelector("#inputSection form");
const fruitNutrition = document.querySelector("#nutritionSection p");
const errMsg = document.querySelector("#ErrorMSG p");

console.log(fruitNutrition);
fruitForm.addEventListener("submit", extractFruit);

},{"./fruit":1}]},{},[2]);
