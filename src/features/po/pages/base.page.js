const { HeaderComponent, FooterComponent, SearchComponent } = require('../components')

class BasePage {
    constructor(url) {
        this.url = url
        this.headerComponent = new HeaderComponent()
        this.footerComponent = new FooterComponent()
        this.searchComponent = new SearchComponent()
    }

    open() {
        return browser.url(this.url);
    }
}

module.exports = BasePage;