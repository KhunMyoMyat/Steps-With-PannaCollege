var body = document.body;

var h1 = document.createElement("h1");
h1.textContent = "Welcome to my page";
body.appendChild(h1);
h1.setAttribute(
  "style",
  "margin:auto; width:50%; color:red; font-size:3rem; width:fit-content; padding:2rem 1rem; "
);

// -------------------------------------

var info = document.createElement("div");
body.appendChild(info);
info.setAttribute(
  "style",
  "margin:auto; width:50%; text-align:center; line-height:2rem;"
);

var img = document.createElement("img");
info.appendChild(img);
img.setAttribute(
  "src",
  "module-2-Html-Css-Advance/Run-Buddy-project-2/assets/imgs/trainer-1.jpg"
);

var kitten = document.createElement("div");
info.appendChild(kitten);
kitten.textContent = "This is my kitten";
kitten.setAttribute("style", "font-size:1.5rem;");

var nameEl = document.createElement("div");
info.appendChild(nameEl);
nameEl.textContent = "His name is Jax.";
nameEl.setAttribute("style", "margin-bottom:2rem;");

// ----------------------------------

var favorite = document.createElement("div");
body.appendChild(favorite);
favorite.textContent = "My favorite food are:";
favorite.setAttribute("style", "font-size:1.5rem;");

var list = document.createElement("ol");
favorite.appendChild(list);
list.setAttribute("style", "background:#333333; padding:2rem;");

var li1 = document.createElement("li");
list.appendChild(li1);
li1.textContent = "Apples 🍎";
li1.setAttribute(
  "style",
  "color:white; background:#666666; padding:5px; margin-left:1.5rem;"
);

var li2 = document.createElement("li");
list.appendChild(li2);
li2.textContent = "Pizza 🍕";
li2.setAttribute(
  "style",
  "color:white; background:#777777; padding:5px; margin-left:1.5rem;"
);

var li3 = document.createElement("li");
list.appendChild(li3);
li3.textContent = "Dumplings 🥟";
li3.setAttribute(
  "style",
  "color:white; background:#888888; padding:5px; margin-left:1.5rem;"
);

var li4 = document.createElement("li");
list.appendChild(li4);
li4.textContent = "Cupcakes 🧁";
li4.setAttribute(
  "style",
  "color:white; background:#999999; padding:5px; margin-left:1.5rem;"
);
