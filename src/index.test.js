import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
// NOTE: The => replaces the 'function' keyword
describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

// JSDOM test
describe('index.html', () => {
  // Make sure the markup is there
  //  Add the 'done' parameter for asynchronous test.
  it ('should say hello', (done) => {
    // Reference the html file and hold in memory
    const index = fs.readFileSync('./src/index.html', "utf-8");
    // Set up the jSDOM environment
    //  Result is a virtual DOM in memory.
    //  The function is a callback, The window is same as actual window
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      // done means it is now safe to evaluate the asynchronous call
      done();
      // Free memory taken by the in-memory window (dom)
      window.close();
    })
  })
})
