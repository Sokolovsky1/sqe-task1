const BasePage = require("./base.page");
const { LandingPageContentComponent } = require('../components')

class LandingPge extends BasePage {
    constructor() {
        super('/')
        this.contentComponent = new LandingPageContentComponent()
    }
}

module.exports = LandingPge