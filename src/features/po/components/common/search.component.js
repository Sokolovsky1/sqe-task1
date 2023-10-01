const BaseComponent = require("./base.component");

class SearchComponent extends BaseComponent {
    constructor() {
        super('.header-search-ui')
    }

    get searchIcon() {
        return this.rootEl.$('.header-search__button')
    }

    get searchPanel() {
        return this.rootEl.$('.header-search__panel')
    }
    
    get searchInput() {
        return this.rootEl.$('.header-search__input')
    }

    get findBtn() {
        return this.rootEl.$(`//button/span[contains(text(),'Find')]`)
    }
}

module.exports = SearchComponent