const { Given, When, Then } = require('@wdio/cucumber-framework');
const { config } = require('../configs/wdio.conf')


const { LandingPage, AboutPage } = require ('../features/po/pages');
const landingPage = new LandingPage()
const aboutPage = new AboutPage()

Given('I am on the about page', async () => {
    await aboutPage.open()
});

When('I click on logo', async() => {
    await aboutPage.headerComponent.headerLogo.click()
}) 

Then('I should be directed to main page', async() => {
    await expect(browser).toHaveUrl(config.baseUrl + landingPage.url)
})

