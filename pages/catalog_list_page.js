


const getAddToCartBtn = ({title}) => locate('.inventory_item').withText(title).find('button').withText('Add to cart')
const getRemoveFromCartBtn = ({title}) => locate('.inventory_item').withText(title).find('button').withText('Remove')

const configApp = require('../config')
module.exports = class CatalogListPage {
    I

    constructor(I) {
        this.I = I;
    }

    addToCart = ({title}) => {
        this.I.click(getAddToCartBtn({title}));
    }

    removeFromCart = ({title}) => {
        this.I.click(getRemoveFromCartBtn({title}));
    }

    gotToInventory = () => {
        this.I.amOnPage(configApp.url + "/inventory.html")
    }

    logout() {
        this.I.click('#react-burger-menu-btn');
        this.I.click('#logout_sidebar_link');
    }
}