@landingPageUI
Feature: Landing Page UI

  Scenario Outline: Open landing page and maximize window
    Given I am on the landing page
    When I maximize window

  Scenario Outline: Check the title is correct
    Then Page title should "be equal" to "EPAM | Software Engineering & Product Development Services"

  Scenario Outline: Check the ability to switch Light / Dark mode
  
    When I click on theme swicther
    Then color theme should change to opposite

  Scenario Outline: Check the policies list
    
    Then I check policies list contain next points:
      | INVESTORS | COOKIE POLICY | OPEN SOURCE | APPLICANT PRIVACY NOTICE | PRIVACY POLICY | WEB ACCESSIBILITY |

  Scenario Outline: Check that allow to switch location list by region
    
    Then I check Our Locations list "contain" "<location>"
    When I scroll to "<location>" element View
    When I click on "<location>"
    Then "<location>" becomes active
        Examples:
      | location  |
      | AMERICAS  |
      | EMEA      |
      | APAC      |
  
  Scenario Outline: Check that allow to change language to UA

    When I click on language selector
    Then language dropdown should be displayed
    When I click on "UA_UA" language
    Then language should be changed to Ukrainian