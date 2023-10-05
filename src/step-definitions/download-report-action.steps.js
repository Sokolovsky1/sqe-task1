const { When, Then } = require('@wdio/cucumber-framework');
const path = require('path')
const fs = require('fs')

const { AboutPage } = require ('../features/po/pages');
const aboutPage = new AboutPage()

When('I click on download button in EPAM at a Glance section', async() => {
    await aboutPage.epamAtGlanceComponent.downloadBtn.scrollIntoView({ block: 'center' });
    await aboutPage.epamAtGlanceComponent.downloadBtn.click()
}) 

Then('file should be downloaded with {string} name and {string} extension', async(fileName, extension) => {
    const filePath = path.join(global.downloadDir, `${fileName}.${extension}`)
    for (let i = 0; i < 3; i++) {
        if (!fs.existsSync(filePath)) {
            await browser.pause(5000)
        } else {
            break;
        }
    }
    await expect(fs.existsSync(filePath)).toBeTruthy()
})

