const input = document.getElementById('validation-input');

function inputText(event) {
    if (event.currentTarget.value !== "") {
        input.textContent = event.currentTarget.value;
    }
}
input.addEventListener('input', inputText);

input.onblur = function () {
    if (input.textContent.length !== Number(input.dataset.length)) {
        input.classList.add('invalid');
    }
    else {
        input.classList.add('valid');
    }
}
input.onfocus = function () {
    if (input.classList.contains('invalid')) {
        input.classList.remove('invalid');
    }
    if (input.classList.contains('valid'))
        input.classList.remove('valid');
}