function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  if (Number(amount) < Number(input.min) || Number(amount) > Number(input.max)) {
    window.alert("Діапазон від 1 до 100");
    return;
  }
  const divs = [];
  for (let i = 0, width = 30, height = 30; i < amount; i++, width += 10, height += 10) {
    const element = document.createElement("div");
    element.className = "boxes__item";
    element.style.cssText =
      `width:${width}px;
      height:${height}px;
      background-color:${getRandomHexColor()};
    `;
    divs.push(element);

  }

  boxesEl.append(...divs);
}
function destroyBoxes() {
  const boxesItems = boxesEl.querySelectorAll('.boxes__item');
  for (const item of boxesItems) {
    item.remove();
  }
}
const boxesEl = document.getElementById('boxes');
const createBtn = document.querySelector("button[data-create]");
const input = document.querySelector("#controls input");
createBtn.addEventListener('click', () => {
  createBoxes(Number(input.value));
})
const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.addEventListener('click', destroyBoxes
)