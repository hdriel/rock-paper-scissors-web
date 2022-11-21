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
  const idleContainerElement = document.getElementById(
    DOM_SELECTORS_IDS.IDLE_CONTAINER
  );

  winnerContainerElement.style.display = "flex";

  idleContainerElement.style.display = "none";

  totalGames++;

  const winnerElement = document.getElementById(DOM_SELECTORS_IDS.WINNER);
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
