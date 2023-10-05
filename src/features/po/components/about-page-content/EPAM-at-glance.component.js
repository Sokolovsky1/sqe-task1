const BaseComponent = require("../common/base.component");

class EpamAtGlanceComponent extends BaseComponent {
    constructor() {
        super('.content-container')
    }

    get downloadBtn() {
        return this.rootEl.$('(//div[normalize-space()="EPAM at a Glance"])[1]/following-sibling::div[@class="button"]//a')
    }
}

module.exports = EpamAtGlanceComponent