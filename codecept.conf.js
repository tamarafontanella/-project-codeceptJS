exports.config = {
  tests: 'test/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      port: 4444
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
  },
  
  multiple: {
    basic: {
      // run all tests in chrome and firefox
      browsers: ["chrome", "firefox"]
    }
  },
  bootstrap: null,
  mocha: {},
  name: '-project-codeceptJS'
}