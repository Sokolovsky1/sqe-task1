const BasePage = require("./base.page");
const { SearchPageContentComponent } = require('../components')

class SearchPage extends BasePage {
    constructor(query) {
        super(`/search?q=${query}`)
        this.contentComponent = new SearchPageContentComponent()
    }
}

module.exports = SearchPage