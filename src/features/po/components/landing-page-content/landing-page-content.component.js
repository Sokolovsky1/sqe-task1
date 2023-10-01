const BaseComponent = require("../common/base.component");

class LandingPageContentComponent extends BaseComponent {
    constructor() {
        super('.content-container')
    }

    ourLocationsList() {
        const elementsList = this.rootEl.$$('.tabs-23__ul a')
        const res = elementsList.map( (el) => {
            return el.getText()
        })
        return res.join(',')
    }

    locationBtn(name) {
        const elements = this.rootEl.$('.tabs-23__ul')
        return elements.$(`//a[text() = '${name}']`)
    }
}

module.exports = LandingPageContentComponent