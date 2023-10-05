const BasePage = require("./base.page");
const { EpamAtGlanceComponent } = require('../components')

class AboutPage extends BasePage {
    constructor() {
        super(`/about`)
        this.epamAtGlanceComponent = new EpamAtGlanceComponent()
    }
}

module.exports = AboutPage