const categoriesArrayEl = document.querySelectorAll("#categories > .item");

console.log(`Number of categories: ${categoriesArrayEl.length}`);
console.log("");
for (const node of categoriesArrayEl) {

    console.log(`Category: ${node.querySelector("h2").textContent}`);
    console.log(`Elements: ${node.querySelectorAll('ul>li').length}`);
    console.log("");
}