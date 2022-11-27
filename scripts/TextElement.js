function TextElement(elementId) {
  let value = "";

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
  };
}
