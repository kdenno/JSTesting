const generateText = (name, age) => {
  // returns output text
  return `${name} (${age} years old)`;
};

exports.creteElement = (type, text, className) => {
  // create a new HTML Elements and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};
const validateInput = (text, notEmpty, isNumber) => {
  // validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }

  return true;
};

// integration tests will be much easier if we have a function that takes input and returns out but addUser() in app.js doesnt so we can change a few things here for achieve what we want

exports.checkAndGenerate = (name, age) => {
  if (!validateInput(name, true, false) || !validateInput(age, false, true)) {
    return false;
  }
  // generate test
  return generateText(name, age);
};
// now in the end, we can see that we've created a function that has other dependencies and therefore this is good for integration tests

exports.generateText = generateText;
exports.validateInput = validateInput;
