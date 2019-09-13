exports.config = {
  tests: './github-testing/test-artifacts/tests/*/*/*-test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://github.com/',
      browser: 'chrome',
      windowSize : "maximize"
    },
    BasicSteps: {
      require: './github-testing/test-artifacts/steps/basic-steps.js',
    },
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  include: {
    
  },
  bootstrap: "./github-testing/dev-artifacts/hooks/hook.js",
  teardown: "./github-testing/dev-artifacts/hooks/hook.js",
  mocha: {},
  name: 'JS_TA_Frame'
}