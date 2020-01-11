const {generateText} = require('./util');
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