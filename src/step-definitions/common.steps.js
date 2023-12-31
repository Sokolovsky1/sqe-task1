const { Given, When, Then } = require('@wdio/cucumber-framework');
const compare = require('./utils/compare-text')

Then('Page title should {string} to {string}', async(opt, text) => {
    const title = await browser.getTitle();
    await compare(title, text, opt)
})

When('I maximize window', async () => {
    await browser.maximizeWindow();
});
