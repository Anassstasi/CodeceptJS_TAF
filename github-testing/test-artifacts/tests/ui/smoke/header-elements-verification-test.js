const USER_CREDENTIALS = require('../../../data/test-data/credentials').USER
const TEST_GROUPS = require('../../../../dev-artifacts/data/constants/constants').TEST_GROUPS
const LoginPage = require('../../../pages/pages/login-page')
const MainHub = require('../../../pages/pages/main-hub')

Feature('Header elements').retry(1)

let loginPage = new LoginPage()
let mainHub = new MainHub()

Before(async (I) => { 
   await I.openApp()
   await I.waitForLoaded()

   await mainHub.click('header', 'signInButton')
   await loginPage.logIn(USER_CREDENTIALS.EMAIL, USER_CREDENTIALS.PASSWORD)
   await mainHub.see('header', 'avatarIcon')
 })

/**
 * [Test-Case ID:GH-0004]
 * 
 * Checks the presence of appropriate header elements.
 * There should be 'Pull Requests', 'Issues', 'Market Place', 'Explore' buttons and 'Search Field'.
 */
Scenario(`[Test-Case ID:GH-0004] - Header elements verification test|
   @header @header_component ${TEST_GROUPS.SMOKE}`,
 async () => {
    await mainHub.see('header', 'searchField')
    await mainHub.see('header', 'pullRequests')
    await mainHub.see('header', 'issues')
    await mainHub.see('header', 'marketplace')
    await mainHub.see('header', 'explore')
});
