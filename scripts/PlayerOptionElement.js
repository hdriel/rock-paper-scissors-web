function PlayerOptionElement(elementIds) {
  let value = ITEMS.NONE;

  function updateValue(newValue) {
    value = newValue;
    disable(value !== ITEMS.NONE);
    active(value);
  }

  function render(onChange) {
    Object.keys(elementIds).forEach((item) => {
      const isSelected = `${value}` === item;
      const elementId = elementIds[item];
      const element = document.getElementById(elementId);
      onChange(element, isSelected, item);
    });
  }

  function disable(value = true) {
    render((element) =>
      value
        ? element?.classList.add("disabled")
        : element?.classList.remove("disabled")
    );
  }

  function active(value) {
    render((element, isSelected, item) => {
      `${value}` === item
        ? element?.classList.add("active")
        : element?.classList.remove("active");
    });
  }

  function isWin(oppositeValue) {
    return [
      [ITEMS.ROCK, ITEMS.ROCK, WINNER.DRAW],
      [ITEMS.ROCK, ITEMS.PAPER, WINNER.COMPUTER],
      [ITEMS.ROCK, ITEMS.SCISSORS, WINNER.PLAYER],

      [ITEMS.PAPER, ITEMS.ROCK, WINNER.PLAYER],
      [ITEMS.PAPER, ITEMS.PAPER, WINNER.DRAW],
      [ITEMS.PAPER, ITEMS.SCISSORS, WINNER.COMPUTER],

      [ITEMS.SCISSORS, ITEMS.ROCK, WINNER.COMPUTER],
      [ITEMS.SCISSORS, ITEMS.PAPER, WINNER.PLAYER],
      [ITEMS.SCISSORS, ITEMS.SCISSORS, WINNER.DRAW],
    ].find(
      ([player, computer]) => player === value && computer === oppositeValue
    )?.[2];
  }

  return {
    isWin,
    active,
    disable,
    getValue: () => value,
    update: updateValue,
    reset: () => updateValue(ITEMS.NONE),
  };
}
