const _sleep = (ms) => new Promise((res) => setTimeout(res, ms));

function resetGame() {
  score.resetScore();
  totalGames = 0;
  computerChoose = -1;
  playerChoose = -1;
  inPlaying = false;

  const totalGamesElement = document.getElementById(
    DOM_SELECTORS_IDS.TOTAL_GAME
  );
  const winnerContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.WINNER_CONTAINER
  );
  const idleContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.IDLE_CONTAINER
  );
  const computerActionElement = document.getElementById(
    DOM_SELECTORS_IDS.COMPUTER_ACTION
  );

  totalGamesElement.innerText = `${totalGames}`;

  winnerContainerElement.style.display = "none";

  idleContainerElement.style.display = "flex";

  Object.values(CLASS_ITEM).forEach((itemClass) => {
    computerActionElement.classList.remove(itemClass);
  });

  _removeActiveAction();
  _removeDisableActions();
}

function playAgain() {
  _removeActiveAction();
  inPlaying = false;

  const winnerContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.WINNER_CONTAINER
  );
  const idleContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.IDLE_CONTAINER
  );
  const computerActionElement = document.getElementById(
    DOM_SELECTORS_IDS.COMPUTER_ACTION
  );

  winnerContainerElement.style.display = "none";
  idleContainerElement.style.display = "flex";

  Object.values(CLASS_ITEM).forEach((itemClass) => {
    computerActionElement.classList.remove(itemClass);
  });

  _removeDisableActions();
}
