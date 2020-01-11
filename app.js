const { checkAndGenerate, createElement } = require("./util");

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
  const outputText = checkAndGenerate(newUserNameInput.value, newUserAgentInput.value);
  if(!outputText){
      // dont create the DOM element
      return;
  }

  const userList = document.querySelector(".user-list");
  
  const element = createElement("li", outputText, "user-item");
  userList.appendChild(element);
};

// Start the app;
initApp();
