function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorValue = document.querySelector('.color');
const changeColorBody = document.querySelector('button.change-color');
changeColorBody.addEventListener('click', () => {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent;

}

);