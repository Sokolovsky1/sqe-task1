const { Given, When, Then } = require('@wdio/cucumber-framework');
const compare = require('./utils/compare-text')


const { LandingPage } = require ('../features/po/pages');
const landingPage = new LandingPage()

Given('I am on the landing page', async () => {
    return await landingPage.open()
});

When('I click on theme swicther', async() => {
    if (await landingPage.headerComponent.darkTheme.isExisting()) {
        this.isBeforeClick = true
    } else {
        this.isBeforeClick = false
    }
    await landingPage.headerComponent.themeSwitcher.click()
    await browser.pause(2000)
    if (await landingPage.headerComponent.darkTheme.isExisting()) {
        this.isAfterClick = true
    } else {
        this.isAfterClick = false
    }
})

Then('color theme should change to opposite', async() => {
    await expect(this.isBeforeClick).not.toEqual(this.isAfterClick);
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

Then('I check policies list contain next points:', async(dataTable) => {
    const received = await landingPage.footerComponent.policiesList().sort()
    const expected = dataTable.raw()[0].sort()
    return await expect(received).toStrictEqual(expected)
})

Then('I check Our Locations list {string} {string}', async(opt, point) => {
    await browser.pause(2000)
    const result = await landingPage.contentComponent.ourLocationsList()
    return await compare(result, point, opt)
})

// When('I click on {string}', async(locationName) => {
//     await landingPage.contentComponent.locationBtn(locationName).scrollIntoView({ block: 'center', inline: 'center' });
//     return await landingPage.contentComponent.locationBtn(locationName).click()
// })

When('I scroll to {string} element View', async(locationName) => {
    await landingPage.contentComponent.locationBtn(locationName).scrollIntoView({ block: 'center', inline: 'center' });
})

When('I click on {string}', async(locationName) => {
    await landingPage.contentComponent.locationBtn(locationName).click()
    await landingPage.contentComponent.locationBtn(locationName).scrollIntoView({ block: 'center', inline: 'center' });
})

Then('{string} becomes active', async(locationName) => {
    const locationListString = await landingPage.contentComponent.ourLocationsList()
    const locationList = locationListString.split(',')
    for (let i = 0; i < locationList.length; i++) {
        const attr = await landingPage.contentComponent.locationBtn(locationList[i]).getAttribute('class')      
        if (locationList[i] === locationName ) {
            await compare(attr, 'active', 'contain')
        } else {
            await compare(attr, 'active', 'not contain')
        }
    }
})

