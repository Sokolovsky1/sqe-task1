const { Given, When, Then } = require('@wdio/cucumber-framework');
const compare = require('./utils/compare-text')


const { LandingPage, SearchPage } = require ('../features/po/pages');
const landingPage = new LandingPage()
const searchPage = new SearchPage()

When('I click on search icon', async() => {
    return await landingPage.searchComponent.searchIcon.click()
}) 

Then('search panel should be displayed', async() => {
    return await expect(landingPage.searchComponent.searchPanel).toBeDisplayed()
}) 

When('I type {string} in to search field', async(text) => {
    return await landingPage.searchComponent.searchInput.setValue(text)
}) 

When('I click Find button', async() => {
    return await landingPage.searchComponent.findBtn.click()
})

Then('search result is displayed', async() => {
    const articles = await searchPage.contentComponent.searchResults
    return await expect(articles).toBeElementsArrayOfSize({ gte: 1 })
}) 
