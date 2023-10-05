const { Given, When, Then } = require('@wdio/cucumber-framework');
const { config } = require('../configs/wdio.conf')
const compare = require('./utils/compare-text')


const { LandingPage, AboutPage } = require ('../features/po/pages');
const landingPage = new LandingPage()
const aboutPage = new AboutPage()

Given('I am on the about page', async () => {
    return await aboutPage.open()
});

When('I click on logo', async() => {
    return await aboutPage.headerComponent.headerLogo.click()
}) 

Then('I should be directed to main page', async() => {
    return await expect(browser).toHaveUrl(config.baseUrl + landingPage.url)
})

