const button = document.getElementById("styleBtn");
const textElement = document.getElementById("textElement");

button.addEventListener("click", function () {
  textElement.style.color = "blue";
  textElement.style.fontSize = "24px";
  textElement.style.backgroundColor = "lightgray";
});

const image = document.getElementById("myImage");
const changeImageBtn = document.getElementById("changeImageBtn");

changeImageBtn.addEventListener("click", function () {
  image.src = "img/image2.jpg";
  image.alt = "Deuxième image";
});

const box = document.getElementById("myBox");
const addClassBtn = document.getElementById("addClassBtn");
const removeClassBtn = document.getElementById("removeClassBtn");

addClassBtn.addEventListener("click", function () {
  box.classList.add("highlight");
});

removeClassBtn.addEventListener("click", function () {
  box.classList.remove("highlight");
});

const toggleClassBtn = document.getElementById("toggleClassBtn");

toggleClassBtn.addEventListener("click", function () {
  box.classList.toggle("highlight");
});

const drakMode = document.getElementById("dark-mode");
drakMode.addEventListener("click", function () {
  document.body.classList.toggle("drak-mode");
  if (document.body.classList.contains("drak-mode")) {
    drakMode.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`;
    box.classList
  } else {
    drakMode.innerHTML = `<ion-icon name="moon-outline"></ion-icon>`;
  }
});

//gestion input

const form = document.getElementById("myForm");
form.addEventListener("submit", function(){
  const nameFaild = document.getElementById('name')
})
