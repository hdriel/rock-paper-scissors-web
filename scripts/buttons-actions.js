function _disableActions() {
  Object.values(DOM_SELECTORS_IDS.PLAYER_ACTIONS).forEach((actionId) => {
    document.getElementById(actionId).classList.add("disabled");
  });
}

function _removeActiveAction() {
  Object.values(DOM_SELECTORS_IDS.PLAYER_ACTIONS).forEach((actionId) => {
    document.getElementById(actionId).classList.remove("active");
  });
}

function _removeDisableActions() {
  Object.values(DOM_SELECTORS_IDS.PLAYER_ACTIONS).forEach((actionId) => {
    document.getElementById(actionId).classList.remove("disabled");
  });
}
