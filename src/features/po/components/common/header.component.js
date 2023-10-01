const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.header__content')
    }

    get themeSwitcher() {
        return this.rootEl.$('.desktop-logo + .theme-switcher-ui .switch')
    }

    get locationSelectorBtn() {
        return this.rootEl.$('.location-selector__button')
    }

    get locationSelectorDD() {
        return this.rootEl.$('.location-selector__panel')
    }

    languageNameBtn(name) {
        const selector = {
            EN_EN: '.location-selector__item a[href="https://www.epam.com"]',
            CZ_CZ: '.location-selector__item a[href="https://careers.epam-czech.cz"]',
            CZ_EN: '.location-selector__item a[href="https://en.careers.epam-czech.cz"]',
            UA_UA: '.location-selector__item a[href="https://careers.epam.ua"]'
        }
        return this.rootEl.$(selector[name])
    }

}

module.exports = HeaderComponent