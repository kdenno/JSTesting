const puppeteer = require('puppeteer');
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
test('it should return valid text', ()=> {
    const text = checkAndGenerate('Deno', 29);
    expect(text).toBe('Deno (29 years old)'); // as we can see the test looks like the one we created in unit testing but this is not just a unit test, its running on a function that has dependencies from other functions.
});

// E2E Testing
test('should create an element with the right text and class', async()=> {
    // launch a browser
    const browser =  await puppeteer.launch({
        headless: true,
        // slowMo: 80,
        // args: ['--window-size=1920, 1080']
    });
    // create a new browser page
    const page = await broswer.page();
    // tell browser which page to go to to run the test
    await page.goto('file:///Users/denniskabuye/Desktop/JSTesting/JSTesting/index.html');
    // tell the browser what to do
    await page.click('input#name');
    // write something in there
    await page.type('input#name', 'Deno');
    await page.click('input#age');
    await page.type('input#age', '28');
    // click the button
    await page.click('#btnAddUser');

    // now by this time, the input should be submited and an li element created on the  fly so lets check for it use $eval() to get access to the element
    const finalText = await page.$eval('user-item', el => el.textContent);

    // assert 
    expect(final).toBe('Deno (28 years old)');
}, 10000); // we increase the timeout on this test to 10000