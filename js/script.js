const backgroundButton = document.querySelector("#toggleButton");
const body = document.querySelector("body");
const themeName = document.querySelector(".themeName");

backgroundButton.addEventListener("click", () => {
  body.classList.toggle('bodyDark');
  themeName.innerText = body.classList.contains("bodyDark") ? "Ciemne" : "Jaśniejsze";
});