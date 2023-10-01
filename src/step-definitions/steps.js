const { Given, When, Then, After, Before } = require('@wdio/cucumber-framework');
const compare = require('./utils/compare-text')


const { LandingPage } = require ('../features/po/pages/');
const landingPage = new LandingPage()

Before({tags: '@tagName'}, async function() {

    console.log('print your info');
    });

Given('I am on the landing page', async () => {
    return await landingPage.open()
});

Then('Page title should {string} to {string}', async(opt, text) => {
    const title = await browser.getTitle();
    return await compare(title, text, opt)
})

When('I maximize window', async () => {
    return await browser.maximizeWindow();
});

When('I click on theme swicther', async() => {
    return await landingPage.headerComponent.themeSwitcher.click()
})

Then('color theme should change to {string}', async(text) => {
    const attr = await $('body').getAttribute('class')
    await browser.pause(5000)
    return await compare(attr, text, 'contain')
})

When('I click on language selector', async() => {
    return await landingPage.headerComponent.locationSelectorBtn.click()
})

Then('language dropdown should be displayed', async() => {
    await browser.pause(2000)
    const attr = await landingPage.headerComponent.locationSelectorDD.getAttribute('style')
    return await compare(attr, 'block', 'contain')
})

When('I click on {string} language', async(languageName) => {
    return await landingPage.headerComponent.languageNameBtn(languageName).click()
})

Then('language should be changed to Ukrainian', async() => {
    await browser.pause(2000)
    const url = await browser.getUrl()
    return await compare(url, 'https://careers.epam.ua/', 'be equal')
})

Then('I check policies list {string} {string}', async(opt, point) => {
    await browser.pause(2000)
    const result = await landingPage.footerComponent.policiesList()
    return await compare(result, point, opt)
})




// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await pages.login.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(pages.secure.flashAlert).toBeExisting();
//     await expect(pages.secure.flashAlert).toHaveTextContaining(message);
// });

