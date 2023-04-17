Feature('catalog list');
const configApp = require('./config');

const items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt']

const LoginPage = require('./pages/login_page')
const CatalogListPage = require('./pages/catalog_list_page')
const {locator} = require("codeceptjs");
Scenario('Add to cart items', ({I}) => {
    const loginPage = new LoginPage(I);
    loginPage.goToLoginPage();
    loginPage.loginAsStandardUser();
    const catalogListPage = new CatalogListPage(I);
    for (const index in items) {
        const title = items[index];
        catalogListPage.addToCart({title})
    }
    const badgeLocator = locate('#shopping_cart_container').find(".shopping_cart_badge").withText(items.length.toString());
    I.seeElement(badgeLocator)
});

Scenario('Remove items from cart', ({I}) => {
    const loginPage = new LoginPage(I);
    loginPage.goToLoginPage();
    loginPage.loginAsStandardUser();
    const catalogListPage = new CatalogListPage(I);
    for (const index in items) {
        const title = items[index];
        catalogListPage.addToCart({title})
    }
    for (const index in items) {
        const title = items[index];
        catalogListPage.removeFromCart({title})
    }
    const badgeLocator = locate('#shopping_cart_container').find(".shopping_cart_badge");
    I.dontSee(badgeLocator)
});

Scenario('Logout', ({I}) => {
    const loginPage = new LoginPage(I);
    loginPage.goToLoginPage();
    loginPage.loginAsStandardUser();
    const catalogListPage = new CatalogListPage(I);
    catalogListPage.logout()

    I.seeCurrentUrlEquals(configApp.url)
});


/*
test.describe("Catalog list tests", async () => {
    const items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt']
    test(`Add to cart items`, async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.loginAsStandardUser();
        const catalogListPage = new CatalogListPage(page);
        for (const index in items) {
            const title = items[index];
            await catalogListPage.addToCart({title})
        }
        await expect(page.locator('#shopping_cart_container', {has: page.locator(".shopping_cart_badge", {hasText: items.length.toString()})})).toHaveCount(1)
    })

    test(`Remove from cart items`, async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.loginAsStandardUser();
        const catalogListPage = new CatalogListPage(page);
        for (const index in items) {
            const title = items[index];
            await catalogListPage.addToCart({title})
        }
        for (const index in items) {
            const title = items[index];
            await catalogListPage.removeFromCart({title})
        }
        await expect(page.locator('#shopping_cart_container', {has: page.locator(".shopping_cart_badge")})).toHaveCount(0)
    })

    test(`Logout`, async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.loginAsStandardUser();
        const catalogListPage = new CatalogListPage(page);
        await catalogListPage.logout();
        await expect(page).toHaveURL(config.url)
    })
});*/
