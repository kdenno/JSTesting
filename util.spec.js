const {generateText, checkAndGenerate} = require('./util');
test('it should create text from the ouput provided', ()=> {
    const text = generateText('Deno', 29);
    expect(text).toBe('Deno (29 years old)');
});
test('should output data-less-text', ()=> {
    const text = generateText(' ', null);
    expect(text).toBe(' (null years old)')
});
test('should return undefined', ()=> {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)');
});

// Integration Testing
text('it should return valid text', ()=> {
    const text = checkAndGenerate('Deno', 29);
    expect(text).toBe('Deno (29 years old)'); // as we can see the test looks like the one we created in unit testing but this is not just a unit test, its running on a function that has dependencies from other functions.
});
