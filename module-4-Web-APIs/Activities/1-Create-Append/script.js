var body = document.body;

var h1 = document.createElement("h1");

h1.textContent = "Welcome to my page";

body.appendChild(h1);

h1.setAttribute(
  "style",
  "color: red; font-size: 3rem; background: lightblue; width: fit-content; padding: 2rem 1rem; "
);
