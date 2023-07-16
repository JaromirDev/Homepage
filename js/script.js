let backgroundButton = document.querySelector("#toggleButton");
let body = document.querySelector("body");
let themeName = document.querySelector(".themeName");

backgroundButton.addEventListener("click", () => {
  body.classList.toggle('bodyDark');
  
  
  themeName.innerText = body.classList.contains("bodyDark") ? "Ciemne" : "Jaśniejsze";
  
  if (body.classList.contains("bodyLight")) {
    backgroundButton.classList.add("backgroundButton");
  } else {
    backgroundButton.classList.remove("backgroundButton");
  }
});


