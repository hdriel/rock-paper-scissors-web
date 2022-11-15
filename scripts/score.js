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
