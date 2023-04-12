const { extractFruit } = require("./fruit");
const fruitForm = document.querySelector("#inputSection form");
const fruitNutrition = document.querySelector("#nutritionSection p");
const errMsg = document.querySelector("#ErrorMSG p");

console.log(fruitNutrition);
fruitForm.addEventListener("submit", extractFruit);
