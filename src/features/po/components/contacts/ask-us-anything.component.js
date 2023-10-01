const BaseComponent = require("../common/base.component");

class AskUsAnythingComponent extends BaseComponent {
    constructor() {
        super('.content-container')
    }

    requiredFields(name) {
        const selector = {
            firstName: "input[name='user_first_name']",
            lastName: "input[name='user_last_name']",
            email: "input[name='user_email']",
            phone: "input[name='user_phone']",
            howHearAbout: "span[aria-describedby='_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-error']",
            gdprConsent: "input[name='gdprConsent']"
        }
        return this.rootEl.$(selector[name])
    }

    howHearAboutDDoption(name) {
        return this.rootEl.$(`//li[contains(text(),"${name}")]`)
    }

    get submitBtn() {
        return this.rootEl.$("button[type='submit']")
    }
}

module.exports = AskUsAnythingComponent