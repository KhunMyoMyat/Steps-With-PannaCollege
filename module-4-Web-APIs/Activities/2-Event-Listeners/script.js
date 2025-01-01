var count = 0;

// Select increment and decrement button elements
var increment = document.querySelector("#increment");
var decrement = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}

// Attach event listener to increment button element
increment.addEventListener("click", function () {
  count++;
  //   console.log(count);
  setCounterText();
});

// Attach event listener to decrement button element
decrement.addEventListener("click", function () {
  if (count > 0) {
    count--;
    // console.log(count);
    setCounterText();
  }
});
