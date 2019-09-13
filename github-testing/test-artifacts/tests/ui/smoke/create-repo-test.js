const USER_CREDENTIALS = require('../../../data/test-data/credentials').USER
const REPO = require('../../../data/test-data/repo-data').REPO
const TEST_GROUPS = require('../../../../dev-artifacts/data/constants/constants').TEST_GROUPS
const LoginPage = require('../../../pages/pages/login-page')
const MainHub = require('../../../pages/pages/main-hub')
const CreateRepoPage = require('../../../pages/pages/create-repo-page')
const NewRepoSetupPage = require('../../../pages/pages/new-repo-setup-page')
const RandomGenerator = require('../../../../dev-artifacts/utils/generators/random-generator')

Feature('Create a repo').retry(1)

let loginPage = new LoginPage()
let mainHub = new MainHub()
let createRepoPage = new CreateRepoPage()
let newRepoSetupPage = new NewRepoSetupPage()

let repo_name = RandomGenerator.getRandomString()

Before(async (I) => { 
    await I.openApp()
    await I.waitForLoaded()
 
    await mainHub.click('header', 'signInButton')
    await loginPage.logIn(USER_CREDENTIALS.EMAIL, USER_CREDENTIALS.PASSWORD)
    await mainHub.see('header', 'avatarIcon')
  })

/**
 * [Test-Case ID:GH-0007]
 * 
 * Tests CREATE A REPO functionality.
 * Creates a repo using valid data.
 */
Scenario(`[Test-Case ID:GH-0007] - Create a repo test| @repo @create_repo ${TEST_GROUPS.SMOKE}`,
 async () => {
    await mainHub.click('header', 'addBtn')
    await mainHub.click('header', 'newRepoBtn')

    await createRepoPage.createNewRepo(repo_name, REPO.DESCRIPTION)

    await newRepoSetupPage.see('httpsRepoLink')
});
