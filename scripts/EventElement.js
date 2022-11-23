function EventElement(elementId) {
  function render(cb) {
    const element = document.getElementById(elementId);
    cb(element);
  }

  return {
    getValue: () => value,
    change: (cb) => render(cb),
  };
}
