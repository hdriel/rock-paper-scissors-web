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

function resetGame() {
  score.resetScore();
  totalGames = 0;
  computerChoose = -1;
  playerChoose = -1;
  inPlaying = false;

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

  const computerActionElement = document.getElementById(
    DOM_SELECTORS_IDS.COMPUTER_ACTION
  );
  Object.values(CLASS_ITEM).forEach((itemClass) => {
    computerActionElement.classList.remove(itemClass);
  });

  _removeActiveAction();
}

async function play(item) {
  if (inPlaying) return;

  inPlaying = true;
  _disableActions();

  playerChoose = item;
  const playerElementId = {
    [ITEMS.ROCK]: DOM_SELECTORS_IDS.PLAYER_ACTIONS.ROCK,
    [ITEMS.PAPER]: DOM_SELECTORS_IDS.PLAYER_ACTIONS.PAPER,
    [ITEMS.SCISSORS]: DOM_SELECTORS_IDS.PLAYER_ACTIONS.SCISSORS,
  }[item];
  const playerElement = document.getElementById(playerElementId);
  playerElement.classList.add("active");

  // computer choosing
  const computerChoose = await _computerPlay();
  const computerActionElement = document.getElementById(
    DOM_SELECTORS_IDS.COMPUTER_ACTION
  );
  computerActionElement.classList.add(CLASS_ITEM[computerChoose]);

  const winnerPlayer = _getWinner(
    { player: 1, choose: playerChoose },
    { player: 2, choose: computerChoose }
  );

  const winnerContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.WINNER_CONTAINER
  );
  winnerContainerElement.style.display = "flex";
  const idleContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.IDLE_CONTAINER
  );
  idleContainerElement.style.display = "none";

  const winnerElement = document.getElementById(DOM_SELECTORS_IDS.WINNER);
  totalGames++;
  switch (winnerPlayer) {
    case 1:
      winnerElement.innerText = "You";
      score.updateScore(score.getScore() + 1);
      break;
    case 2:
      winnerElement.innerText = "Computer";
      break;
    case 0:
    default:
      winnerElement.innerText = "Draw";
  }

  const totalElement = document.getElementById(DOM_SELECTORS_IDS.TOTAL_GAME);
  totalElement.innerText = `${totalGames}`;
}

function playAgain() {
  _removeActiveAction();
  inPlaying = false;

  const winnerContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.WINNER_CONTAINER
  );
  winnerContainerElement.style.display = "none";
  const idleContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.IDLE_CONTAINER
  );
  idleContainerElement.style.display = "flex";

  const computerActionElement = document.getElementById(
    DOM_SELECTORS_IDS.COMPUTER_ACTION
  );
  Object.values(CLASS_ITEM).forEach((itemClass) => {
    computerActionElement.classList.remove(itemClass);
  });
}

const _sleep = (ms) => new Promise((res) => setTimeout(res, ms));

/*
   P2/P1:   | rock  | paper |   scissors
   rock     |  X    |  P1   |   P2
   paper    |  P2   |   X   |   P1
   scissors |  P1   |  P2   |    X
 */
function _getWinner(player1, player2) {
  const matrix = [
    [0, player1.player, player2.player],
    [player2.player, 0, player1.player],
    [player1.player, player2.player, 0],
  ];

  return matrix[player2.choose][player1.choose];
}

async function _computerPlay() {
  const options = Object.values(ITEMS);
  const r = Math.floor(Math.random() * 100);
  const random = options[r % options.length];

  const computerActionElement = document.getElementById(
    DOM_SELECTORS_IDS.COMPUTER_ACTION
  );
  computerActionElement.classList.add("spin");
  await _sleep(1500);
  computerActionElement.classList.remove("spin");

  return random;
}

function _disableActions() {
  Object.values(DOM_SELECTORS_IDS.PLAYER_ACTIONS).forEach((actionId) => {
    document.getElementById(actionId).classList.add("disabled");
  });
}

function _removeActiveAction() {
  Object.values(DOM_SELECTORS_IDS.PLAYER_ACTIONS).forEach((actionId) => {
    document.getElementById(actionId).classList.remove("active");
  });
}
