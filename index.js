const fruitForm = document.querySelector("#inputSection form");
const fruitList = document.querySelector("#fruitSelection form");
fruitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  console.log(event.target.fruitInput.value);
  event.target.fruitInput.value = "";
});
