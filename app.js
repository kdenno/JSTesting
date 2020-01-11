const { generateText, createElement, validateInput } = require("./util");

const initApp = () => {
  // initializes the app, registers the button click listener
  const newUserButton = document.querySelector("#btnAddUser");
  newUserButton.addEventListener("click", addUser);
};
const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // appends the element to the DOM
  const newUserNameInput = document.querySelector("input#name");
  const newUserAgentInput = document.querySelector("input#age");
  if (
    !validateInput(newUserNameInput.value, true, false) ||
    !validateInput(newUserAgentInput.value, false, true)
  ) {
    return;
  }

  const userList = document.querySelector(".user-list");
  const outputText = generateText(
    newUserNameInput.value,
    newUserAgentInput.value
  );
  const element = createElement("li", outputText, "user-item");
  userList.appendChild(element);
};

// Start the app;
initApp();
