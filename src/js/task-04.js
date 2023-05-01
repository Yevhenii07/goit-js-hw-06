const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.getElementById('value');


let counterValue = 0;
function addOne() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
function subtractOne() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
decrementEl.addEventListener('click', subtractOne);
incrementEl.addEventListener('click', addOne);