const ITEMS = {
  NONE: -1,
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

const DEFAULT_RANDOM_TIME = 1200;

const DOM_SELECTORS_IDS = {
  RESET: "reset",
  SCORE: "score",
  TOTAL_GAME: "total-games",
  WINNER: "winner",
  WINNER_CONTAINER: "winner-container",
  IDLE_CONTAINER: "idle-container",
  COMPUTER_ACTION: "computer-player-image",
  PLAYER_ACTIONS: {
    [ITEMS.ROCK]: "rock",
    [ITEMS.PAPER]: "paper",
    [ITEMS.SCISSORS]: "scissors",
  },
};

const CLASS_ITEM = {
  [ITEMS.ROCK]: "action-rock",
  [ITEMS.PAPER]: "action-paper",
  [ITEMS.SCISSORS]: "action-scissors",
};

const WINNER = {
  DRAW: 0,
  PLAYER: 1,
  COMPUTER: 2,
};
