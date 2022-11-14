const DOM_SELECTORS_IDS = {
  RESET: "reset",
  SCORE: "score",
  TOTAL_GAME: "total-games",
  WINNER: "winner",
  WINNER_CONTAINER: "winner-container",
  IDLE_CONTAINER: "idle-container",
  COMPUTER_ACTION: "computer-player-image",
  PLAYER_ACTIONS: {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  resetGame();
});

const ITEMS = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

let score = 0;
let totalGames = 0;
let computerChoose = -1;
let playerChoose = -1;
let winner = "";

function resetGame() {
  score = 0;
  totalGames = 0;
  computerChoose = ITEMS.UNDEFINED;
  playerChoose = ITEMS.UNDEFINED;
  winner = "";

  const scoreElement = document.getElementById(DOM_SELECTORS_IDS.SCORE);
  scoreElement.innerText = `${score}`;

  const totalGamesElement = document.getElementById(
    DOM_SELECTORS_IDS.TOTAL_GAME
  );
  totalGamesElement.innerText = `${totalGames}`;

  const winnerContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.WINNER_CONTAINER
  );
  winnerContainerElement.style.display = "none";

  const idleContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.IDLE_CONTAINER
  );
  idleContainerElement.style.display = "flex";
}

async function play(item) {
  playerChoose = item;
  const computerChoose = await computerPlay();
  const winnerPlayer = getWinner(
    { player: 1, choose: playerChoose },
    { player: 0, choose: computerChoose }
  );
  switch (winnerPlayer) {
    case 1:
      alert("you");
      break;
    case 0:
      alert("computer");
      break;
    default:
      alert("same");
  }
}

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

function getWinner(player1, player2) {
  // todo: implements this logic
  return player1.player;
}

async function computerPlay() {
  const options = Object.values(ITEMS);
  const random = options[(Math.random() * 100) % options.length];

  const scoreElement = document.getElementById(
    DOM_SELECTORS_IDS.COMPUTER_ACTION
  );
  scoreElement.classList.add("spin");
  await sleep(3000);
  scoreElement.classList.remove("spin");

  return random;
}
