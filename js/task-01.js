const itemsCategory = document.querySelector("ul").children;
console.log("Number of categories:", itemsCategory.length);

for (const item of itemsCategory) {
    const itemTitle = item.querySelector("h2").textContent;
    console.log("Category:", itemTitle);

    const itemEl = item.querySelector("ul").children.length;
    console.log("Elements: ", itemEl);
}
