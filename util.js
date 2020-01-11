exports.generateText = (name, age) => {
    // returns output text
    return `${name} (${age} years old)`;
}

exports.creteElement = (type, text, className)=> {
    // create a new HTML Elements and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;

}
exports.validateInput = (text, notEmpty, isNumber)=> {
    // validate user input with two pre-defined rules
    if(!text) {
        return false;
    }
    if(notEmpty && text.trim().length === 0) {
        return false;
    }
    if (isNumber && +text === NaN) {
        return false;

    }

    return true;

}