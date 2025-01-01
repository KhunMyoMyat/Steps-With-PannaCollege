var body = document.body;

var h1 = document.createElement("h1");
h1.textContent = "Welcome to my page";
body.appendChild(h1);
h1.setAttribute(
  "style",
  "color: red; font-size: 3rem; background: lightblue; width: fit-content; padding: 2rem 1rem; "
);

// -------------------------------------

var info = document.createElement("div");
body.appendChild(info);
info.setAttribute("style", "margin: auto; width: 50%; text-align:center;");

var img = document.createElement("img");
info.appendChild(img);
img.setAttribute(
  "src",
  "module-2-Html-Css-Advance/Run-Buddy-project-2/assets/imgs/trainer-1.jpg"
);

var kitten = document.createElement("div");
info.appendChild(kitten);
kitten.textContent = "This is my kitten";

var nameEl = document.createElement("div");
info.appendChild(nameEl);
nameEl.textContent = "His name is Jax.";

// ----------------------------------

var favorite = document.createElement("div");
body.appendChild(favorite);
favorite.textContent = "My favorite food are:";
