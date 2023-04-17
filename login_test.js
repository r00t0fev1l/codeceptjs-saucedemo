const getLoginError = ({message}) => locate('[data-test="error"]').withText(message)

Feature('login');
const configApp = require('./config');
const LoginPage = require('./pages/login_page');

const message = 'Epic sadface: Sorry, this user has been locked out.';
Scenario('Login with locked out user', ({I}) => {
    const loginPage = new LoginPage(I);
    loginPage.goToLoginPage();
    loginPage.login(configApp.locked_out_user);
    I.seeElement(getLoginError({message}));
});

Scenario('Success Login', ({I}) => {
    const loginPage = new LoginPage(I);
    loginPage.goToLoginPage();
    loginPage.login(configApp.standard_user);
    I.seeInCurrentUrl(configApp.url + "inventory.html");

    //I.expexpect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});



// test.describe("Login tests", () => {
//     test('Login with locked out user', async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         await loginPage.goToLoginPage();
//         await loginPage.login(config.locked_out_user);
//         await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
//     });
//     test('Success Login', async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         await loginPage.goToLoginPage();
//         await loginPage.login(config.standard_user);
//         await expect(page).toHaveURL(config.url + "/inventory.html")
//     });
// })