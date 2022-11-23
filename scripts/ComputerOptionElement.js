function ComputerOptionElement(elementId, classes = {}) {
  let value = ITEMS.NONE;

  async function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  async function random(ms = DEFAULT_RANDOM_TIME) {
    const options = Object.values(ITEMS).filter((item) => item !== ITEMS.NONE);
    const randomOption = options[Math.floor(Math.random() * options.length)];

    await sleep(ms);
    updateValue(randomOption);
  }

  function updateValue(newValue) {
    value = newValue;
    render(value);
  }

  function render(value) {
    const element = document.getElementById(elementId);

    if (classes[value]) {
      element.classList.add(classes[value]);
    } else {
      Object.values(classes).forEach((classItem) => {
        element.classList.remove(classItem);
      });
    }
  }

  function spin(value = true) {
    const element = document.getElementById(elementId);
    value ? element?.classList.add("spin") : element?.classList.remove("spin");
  }

  return {
    spin,
    random,
    getValue: () => value,
    update: updateValue,
    reset: () => updateValue(ITEMS.NONE),
  };
}
