@contact-us
Feature: Contact Us

  Background: Open contact page and maximize window
    Given I am on the contact page
    When I maximize window

  Scenario Outline: Check validation for required fields
    When I input values to check field "<fieldName>" validation:
      | FN    | LN  | Email         | Phone     | howHearAbout   | gdprConsent |
      | John  | Doe | test@test.com | 123456789 | Worked at EPAM | true        |
    
    When I click Submit button
    Then I check that valdation for "<fieldName>" field is required
      Examples:
      | fieldName      |
      | First Name     |
      | Last Name      |
      | Email          |
      | Phone          |
      | How Hear About |
      | GDPR Consent   |