//Board: 4x4 cards
const buttons = {
    back: document.querySelector("#back"),

    howToPlay: document.querySelector("#how-to-play"),

    restart: document.querySelector("#restart"),

    start: document.querySelector("#start")
}

const game = {
    back: () => {
        page.body("start");
        page.hide(page.game);
        page.show(page.start, "flex");
        game.empty();
    },

    board: document.querySelector("#board"),

    currentCard: document.querySelector("#drawn-card"),

    drawCard: () => {
        if (game.drawn.length === loteria.cards.length) return "all cards drawn";

        let card = loteria.random();
        let drawn = game.drawn.find((x) => x.id === card.id);
        if (drawn) game.drawCard();
        else game.drawn.push(card);
    },

    drawn: [],
    
    empty: () => {
        game.stop();
        game.board.innerHTML = "";
        game.currentCard.textContent = "...";
        game.timer.textContent = "...";
        game.winConP.textContent = "...";
        game.winCon = "";
        game.drawn = [];
        game.hand = [];
    },

    getHand: () => {
        let count = 1;
        while (game.hand.length < 16) {
            let randomCard = loteria.random();
            let has = game.hand.find((x) => x.id === randomCard.id);
            if (!has) {
                game.hand.push({
                    ...randomCard,
                    marked: false,
                    position: count
                });
                count++;
            }
        }
    },

    getWinCon: () => {
        game.winCon = game.wins[Math.floor(Math.random() * game.wins.length)].name;
    },

    hand: [],

    interval: null,

    mark: (card) => {
        let drawn = game.drawn.find((x) => x.id === card.cardId);
        if (!drawn) return "Card not drawn!";

        card.children[1].classList.add("marked");
        game.hand.find((x) => x.id === card.cardId).marked = true;
    },

    restart: () => {
        game.empty();
        game.start();
    },

    start: () => {
        page.body("game");
        page.hide(page.start);
        page.show(page.game, "block");
        game.getHand();
        game.getWinCon();
        for (let card of game.hand) {
            let div = document.createElement("div");
            div.classList.add("card");
            div.cardId = card.id;
            div.innerHTML = `
                <img src="images/${loteria.normalize(card.name)}.jpg">
                <div></div>            
                `;
            document.querySelector("#board").appendChild(div);
            div.addEventListener("click", () => {
                game.mark(div);
            })
        }
        //game.interval = setInterval(drawCard, 10000);
    },

    stop: () => {
        clearInterval(game.interval);
    },

    timer: document.querySelector("#timer"),

    winCon: "",

    winConP: document.querySelector("#win-con"),
    //winBy: ["row", "any corner", "diagonal", "column", "all right", "all left", "around", "middle"]
    wins: [
        {
            name: "row",
            positions: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
        },
        {
            name: "any corner",
            positions: [[1, 2, 5, 6], [3, 4, 7, 8], [9, 10, 13, 14], [11, 12, 15, 16]]
        },
        {
            name: "diagonal",
            positions: [[1, 6, 11, 16], [4, 7, 10, 13]]
        },
        {
            name: "column",
            positions: [[1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [4, 8, 12, 16]]
        },
        {
            name: "all right",
            positions: [[3, 4, 7, 8, 11, 12, 15, 16]]
        },
        {
            name: "all left",
            positions: [[1, 2, 5, 6, 9, 10, 13, 14]]
        },
        {
            name: "around",
            positions: [[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5]]
        },
        {
            name: "middle",
            positions: [[6, 7, 10, 11]]
        }
    ]
}

const page = {
    body: (p) => {
        if (p === "start") document.body.style.height = "100dvh";
        else document.body.style.height = "auto";
    },  

    game: document.querySelector("#game"),

    hide: (p) => {
        p.style.display = "none";
    },

    show: (p, type) => {
        if (typeof type !== "string") return null;
        p.style.display = type;
    },

    start: document.querySelector("header")
}

buttons.back.addEventListener("click", game.back);
buttons.restart.addEventListener("click", game.restart);
buttons.start.addEventListener("click", game.start);
