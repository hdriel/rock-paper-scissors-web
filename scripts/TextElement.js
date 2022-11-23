function TextElement(elementId, onChange = undefined) {
  let value = 0;

  function updateValue(newValue) {
    value = newValue;
    render(value);
  }

  function render(value) {
    const element = document.getElementById(elementId);
    if (element) {
      if (typeof onChange === "function") {
        onChange(element);
      } else {
        element.innerText = `${value}`;
      }
    }
  }

  return {
    update: updateValue,
    getValue: () => value,
    reset: () => updateValue(0),
  };
}
