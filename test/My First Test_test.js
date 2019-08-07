Feature('My First Test - @GITHUB');

Scenario('test something', (I) => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
});