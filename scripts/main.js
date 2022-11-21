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

const ITEMS = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

const CLASS_ITEM = {
  0: "action-rock",
  1: "action-paper",
  2: "action-scissors",
};

const score = Score(DOM_SELECTORS_IDS.SCORE);

let totalGames = 0;
let computerChoose = -1;
let playerChoose = -1;
let inPlaying = false;

document.addEventListener("DOMContentLoaded", () => {
  resetGame();
});


