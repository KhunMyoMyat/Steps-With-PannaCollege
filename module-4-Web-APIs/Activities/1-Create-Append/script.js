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
info.setAttribute("style", "margin:auto; width:50%; text-align:center;");

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

var list = document.createElement("ol");
favorite.appendChild(list);

var li1 = document.createElement("li");
list.appendChild(li1);
li1.textContent = "Apples";

var li2 = document.createElement("li");
list.appendChild(li2);
li2.textContent = "Pizza";

var li3 = document.createElement("li");
list.appendChild(li3);
li3.textContent = "Dumplings";

var li4 = document.createElement("li");
list.appendChild(li4);
li4.textContent = "Cupcakes";
