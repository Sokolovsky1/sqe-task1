const BasePage = require("./base.page");
const { AskUsAnythingComponent } = require('../components')

class ContactPage extends BasePage {
    constructor() {
        super(`/about/who-we-are/contact`)
        this.askUsAnythingComponent = new AskUsAnythingComponent()
    }
}

module.exports = ContactPage