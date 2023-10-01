const BaseComponent = require("./base.component");

class FooterComponent extends BaseComponent {
    constructor() {
        super('.footer-container')
    }

    policiesList() {
        const elementsList = this.rootEl.$$('.policies li')
        const res = elementsList.map( (el) => {
            return el.getText()
        })
        return res.join(',')
    }
}

module.exports = FooterComponent