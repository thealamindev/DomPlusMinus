let box = document.querySelector(".box");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");

let count = 0;

increment.addEventListener("click", () => {
  count++;
  box.innerHTML = count;
  if (count >= 10) {
    increment.setAttribute("disabled", "true");
  } else {
    increment.removeAttribute("disabled", "flase");
  }
});

decrement.addEventListener("click", () => {
  count--;
  box.innerHTML = count;
  if (count <= 0) {
    decrement.setAttribute("disabled", "true");
  } else {
    decrement.removeAttribute("disabled", "flase");
  }
});
