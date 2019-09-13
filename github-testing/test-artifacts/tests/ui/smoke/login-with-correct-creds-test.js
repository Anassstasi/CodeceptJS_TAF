const USER_CREDENTIALS = require('../../../data/test-data/credentials').USER
const TEST_GROUPS = require('../../../../dev-artifacts/data/constants/constants').TEST_GROUPS
const LoginPage = require('../../../pages/pages/login-page')
const MainHub = require('../../../pages/pages/main-hub')

Feature('Log in').retry(1)

let loginPage = new LoginPage()
let mainHub = new MainHub()

/**
 * [Test-Case ID:GH-0001]
 * 
 * Tests LOG IN functionality using valid credentials.
 */
Scenario(`[Test-Case ID:GH-0001] - Log in with correct credentials | @login ${TEST_GROUPS.SMOKE}`,
 async (I) => {
    await I.openApp()
    await I.waitForLoaded()

    await mainHub.click('header', 'signInButton')
    await loginPage.logIn(USER_CREDENTIALS.EMAIL, USER_CREDENTIALS.PASSWORD)
    await mainHub.see('header', 'avatarIcon')
});
