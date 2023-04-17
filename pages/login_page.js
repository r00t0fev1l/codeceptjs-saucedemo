
const configApp = require('../config')
module.exports = class LoginPage {
    I
    constructor(I) {
        this.I = I;
    }

    goToLoginPage() {
         this.I.amOnPage(configApp.url);
    }

    login({login, password}) {
         this.I.fillField("#user-name", login);
         this.I.fillField("#password", password);
         this.I.click("#login-button")
    }

    async loginAsStandardUser() {
         this.login(configApp.standard_user);
    }
}