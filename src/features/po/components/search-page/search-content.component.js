const BaseComponent = require("../common/base.component");

class SearchPageContentComponent extends BaseComponent {
    constructor() {
        super('.content-container')
    }

    get searchResults() {
        return this.rootEl.$$('.search-results__items article')
    }
}

module.exports = SearchPageContentComponent