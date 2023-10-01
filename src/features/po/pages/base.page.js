const { HeaderComponent, FooterComponent } = require('../components')

class BasePage {
    constructor(url) {
        this.url = url
        this.headerComponent = new HeaderComponent()
        this.footerComponent = new FooterComponent()
    }

    open() {
        return browser.url(this.url);
    }
}

module.exports = BasePage;