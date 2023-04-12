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
