/* ===== VARIABLES ===== */
let loggedIn = false;
let progress = JSON.parse(localStorage.getItem("progress")) || [];

const user = document.getElementById("user");
const loginBtn = document.getElementById("loginBtn");
const gameGrid = document.getElementById("gameGrid");
const progressList = document.getElementById("progressList");

/* ===== CLASS ===== */
class Game {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  play() {
    if (!progress.includes(this.name)) {
      progress.push(this.name);
      localStorage.setItem("progress", JSON.stringify(progress));
      renderProgress();
    }
    alert("Launching " + this.name);
  }
}

/* ===== OBJECTS ===== */
const games = [
  new Game("Block World", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"),
  new Game("Racing Limit", "https://images.unsplash.com/photo-1502877338535-766e1452684a"),
  new Game("Stickman Fight", "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"),
  new Game("Hex Puzzle", "https://images.unsplash.com/photo-1501785888041-af3ef285b470")
];

/* ===== FUNCTIONS ===== */
function renderGames() {
  gameGrid.innerHTML = "";
  for (let i = 0; i < games.length; i++) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${games[i].image}">
      <div class="card-content">
        <h3>${games[i].name}</h3>
        <button>Play</button>
      </div>
    `;

    card.querySelector("button").onclick = () => {
      loggedIn ? games[i].play() : alert("Please login first!");
    };

    gameGrid.appendChild(card);
  }
}

function renderProgress() {
  progressList.innerHTML = progress.length
    ? progress.map(g => "✔ " + g).join("<br>")
    : "No games played yet";
}

/* ===== EVENTS ===== */
loginBtn.onclick = () => {
  loggedIn = !loggedIn;
  user.textContent = loggedIn ? "Player1" : "Guest";
  loginBtn.textContent = loggedIn ? "Logout" : "Login";
};

/* ===== START ===== */
renderGames();
renderProgress();
