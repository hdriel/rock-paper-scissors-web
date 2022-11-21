function Score(scoreElementId) {
  let score = 0;

  function updateScore(newScore) {
    score = newScore;
    const element = document.getElementById(scoreElementId);
    element.innerText = `${score}`;
  }

  return {
    updateScore,
    getScore: () => score,
    resetScore: () => updateScore(0),
  };
}

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
