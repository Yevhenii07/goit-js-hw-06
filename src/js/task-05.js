const nameOutputEl = document.getElementById('name-output');
const nameInputEl = document.getElementById('name-input');

console.log(nameOutputEl);
console.log(nameInputEl);

function inputText(event) {
    if (event.currentTarget.value === "") {
        nameOutputEl.textContent = "Anonymous";
    }
    else {
        nameOutputEl.textContent = event.currentTarget.value;
    }
}

nameInputEl.addEventListener('input', inputText);