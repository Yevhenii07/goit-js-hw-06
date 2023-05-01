const fontSizeControlEl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControlEl.addEventListener('input', () => {
    text.style.fontSize = fontSizeControlEl.value + "px";

})
