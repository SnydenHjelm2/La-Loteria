//Board: 4x4 cards

for (i=0; i<16; i++) {
    let div = document.createElement("div");
    let randomCard = loteria.cards[Math.floor(Math.random() * loteria.cards.length)];
    div.innerHTML = `
    <img src="images/${loteria.normalize(randomCard.name)}.jpg">
    `;
    div.querySelector("img").style.height = "100%";
    div.querySelector("img").style.width = "100%";
    div.querySelector("img").style.objectFit = "cover";
    div.style.border = "1px solid black";
    document.querySelector("#board").appendChild(div);
}