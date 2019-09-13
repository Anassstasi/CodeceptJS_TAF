# CodeceptJS_TAF
Test automation Framework for testing GitHub written using Codeceptjs.

**JScript_Framework**
Test automation with WebdriverIO and CodeceptJS

>Getting Started
Let's setup the repo and install dependencies:

```git clone https://gitlab.itechart-group.com/dqa5-internal/test-automation/anna-boriskina/jscript_framework.git
cd jscript_framework
npm install```

>Selenium server needs to be running in the background:

```selenium-standalone start```

>Run the tests:

```codeceptjs run --plugins allure --grep '(?=.*@smoke)' ```

This command will run all the tests with the tag @smoke.

*To run all tests in parallel for all browsers use:*

```codeceptjs run-multiple --all```

*To run tests in cross-browser(not parallel) mode use:*
```codeceptjs run-multiple crossBrowser```

>Allure Reporting

To see an Allure report run

```allure serve reports```
