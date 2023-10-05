@logo
Feature: Logo navigation

  Background: Open about page and maximize window
    Given I am on the about page
    When I maximize window

  Scenario Outline: Check that the Company logo on the header lead to the main page
    When I click on logo
    Then I should be directed to main page

