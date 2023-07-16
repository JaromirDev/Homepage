{
const backgroundButton = document.querySelector("#toggleButton");
const body = document.querySelector("body");
const themeName = document.querySelector(".themeName");

backgroundButton.addEventListener("click", () => {
  body.classList.toggle('bodyDark');
  themeName.innerText = body.classList.contains("bodyDark") ? "Ciemne" : "Jaśniejsze";
});

const closeButton = document.querySelector('.conteiner__button--close');
const tableContainer = document.querySelector('.container__table');

closeButton.addEventListener('click', () => {
  tableContainer.style.display = 'none';
});
}
