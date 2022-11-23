function NumberElement(elementId) {
  let value = 0;

  function updateValue(newValue) {
    value = newValue;
    render(value);
  }

  function render(value) {
    const element = document.getElementById(elementId);
    if (element) element.innerText = `${value}`;
  }

  return {
    update: updateValue,
    getValue: () => value,
    reset: () => updateValue(0),
    inc: () => updateValue(value + 1),
    dec: () => updateValue(value - 1),
  };
}
