const counterElement = document.querySelector("#counter");
const buttonElement = document.querySelector("button");

var count = 0;
counterElement.innerHTML = count;

buttonElement.addEventListener("click", () => {
  count += 1;
  counterElement.innerHTML = count;
});
