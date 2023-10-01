const { Given, When, Then } = require('@wdio/cucumber-framework');
const compare = require('./utils/compare-text')


const { ContactPage } = require ('../features/po/pages');
const contactPage = new ContactPage()

Given('I am on the contact page', async () => {
    return await contactPage.open()
});

When('I input values to check field {string} validation:', async (text, dataTable) => {
    // console.log(text, '-----!!!!!-----', dataTable.hashes())
    const data = dataTable.hashes()[0]
    if (text !== 'First Name') {
        await contactPage.askUsAnythingComponent.requiredFields('firstName').setValue(data.FN)    
    }
    if (text !== 'Last Name') {
        await contactPage.askUsAnythingComponent.requiredFields('lastName').setValue(data.LN)    
    }
    if (text !== 'Email') {
        await contactPage.askUsAnythingComponent.requiredFields('email').setValue(data.Email)
    }
    if (text !== 'Phone') {
        await contactPage.askUsAnythingComponent.requiredFields('phone').setValue(data.Phone)
    }
    if (text !== 'How Hear About') {
        await contactPage.askUsAnythingComponent.requiredFields('howHearAbout').scrollIntoView({ block: 'center' });
        await contactPage.askUsAnythingComponent.requiredFields('howHearAbout').click()
        await contactPage.askUsAnythingComponent.howHearAboutDDoption(data.howHearAbout).scrollIntoView({ block: 'center' });
        await contactPage.askUsAnythingComponent.howHearAboutDDoption(data.howHearAbout).click()
    }
    if (text !== 'GDPR Consent') {
        const parent = contactPage.askUsAnythingComponent.requiredFields('gdprConsent').parentElement()
        await parent.scrollIntoView({ block: 'center' });
        await parent.click()
    }
})

When('I click Submit button', async () => {
    await contactPage.askUsAnythingComponent.submitBtn.scrollIntoView({ block: 'center', inline: 'center' });
    await contactPage.askUsAnythingComponent.submitBtn.click()
})

Then ('I check that valdation for {string} field is required', async(text) => {
    if (text === 'First Name') {
        await expect(contactPage.askUsAnythingComponent.requiredFields('firstName')).toHaveAttributeContaining('aria-invalid', 'true')
    }
    if (text === 'Last Name') {
        await expect(contactPage.askUsAnythingComponent.requiredFields('lastName')).toHaveAttributeContaining('aria-invalid', 'true')
    }
    if (text === 'Email') {
        await expect(contactPage.askUsAnythingComponent.requiredFields('email')).toHaveAttributeContaining('aria-invalid', 'true')
    }
    if (text === 'Phone') {
        await expect(contactPage.askUsAnythingComponent.requiredFields('phone')).toHaveAttributeContaining('aria-invalid', 'true')
    }
    if (text === 'How Hear About') {
        await expect(contactPage.askUsAnythingComponent.requiredFields('howHearAbout')).toHaveAttributeContaining('aria-invalid', 'true')
    }
    if (text === 'GDPR Consent') {
        await expect(contactPage.askUsAnythingComponent.requiredFields('gdprConsent')).toHaveAttributeContaining('aria-invalid', 'true')
    }
})
