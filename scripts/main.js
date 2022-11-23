document.addEventListener("DOMContentLoaded", () => {
  resetGame(true);
});

const scorePlayerWins = NumberElement(DOM_SELECTORS_IDS.SCORE);
const scoreComputerWins = NumberElement(DOM_SELECTORS_IDS.TOTAL_GAME);

const winner = TextElement(DOM_SELECTORS_IDS.WINNER);

const winnerContainer = EventElement(DOM_SELECTORS_IDS.WINNER_CONTAINER);
const idleContainer = EventElement(DOM_SELECTORS_IDS.IDLE_CONTAINER);

const computerChoose = ComputerOptionElement(
  DOM_SELECTORS_IDS.COMPUTER_ACTION,
  CLASS_ITEM
);
const playerChoose = PlayerOptionElement(
  DOM_SELECTORS_IDS.PLAYER_ACTIONS,
  CLASS_ITEM
);

let inPlaying = false;

function setWinnerContainerVisibility(value) {
  winnerContainer.change(
    (element) => element && (element.style.display = value ? "flex" : "none")
  );
  idleContainer.change(
    (element) => element && (element.style.display = value ? "none" : "flex")
  );
}

function resetGame(includeScores = false) {
  inPlaying = false;
  computerChoose.reset();
  playerChoose.reset();
  winner.update("");
  setWinnerContainerVisibility(false);

  if (includeScores) {
    scorePlayerWins.reset();
    scoreComputerWins.reset();
  }
}

async function play(item) {
  if (inPlaying) return;
  inPlaying = true;

  playerChoose.disable();
  playerChoose.update(item);

  computerChoose.spin();
  await computerChoose.random();
  computerChoose.spin(false);

  const winnerPlayer = playerChoose.isWin(computerChoose.getValue());

  setWinnerContainerVisibility(true);

  switch (winnerPlayer) {
    case WINNER.PLAYER:
      winner.update("You");
      scorePlayerWins.inc();
      break;
    case WINNER.COMPUTER:
      winner.update("Computer");
      scoreComputerWins.inc();
      break;
    case WINNER.DRAW:
    default:
      winner.update("Draw");
  }
}
