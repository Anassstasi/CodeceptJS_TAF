const USER_CREDENTIALS = require('../../../data/test-data/credentials').USER
const TEST_GROUPS = require('../../../../dev-artifacts/data/constants/constants').TEST_GROUPS
const RandomGenerator = require('../../../../dev-artifacts/utils/generators/random-generator')
const LoginPage = require('../../../pages/pages/login-page')
const MainHub = require('../../../pages/pages/main-hub')

Feature('Log in').retry(1)

let loginPage = new LoginPage()
let mainHub = new MainHub()
let incorrect_password = RandomGenerator.getRandomString()

/**
 * [Test-Case ID:GH-0003]
 * 
 * Tests LOG IN functionality.
 * Logs in using invalid credentials.
 */
Scenario(`[Test-Case ID:GH-0003] - Log in with incorrect credentials| @login ${TEST_GROUPS.REGRESSION}`,
 async (I) => {
    await I.openApp()
    await I.waitForLoaded()

    await mainHub.click('header', 'signInButton')
    await loginPage.logIn(USER_CREDENTIALS.EMAIL, incorrect_password)

    await loginPage.see('incorrectCredsMsg')
});
