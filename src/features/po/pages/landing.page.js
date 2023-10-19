const BasePage = require("./base.page");
const { LandingPageContentComponent } = require('../components')

class LandingPage extends BasePage {
    constructor() {
        super('/')
        this.contentComponent = new LandingPageContentComponent()
    }
}

module.exports = LandingPage