@search
Feature: Search

  Background: Open landing page and maximize window
    Given I am on the landing page
    When I maximize window

  Scenario Outline: Check the search function
    When I click on search icon
    Then search panel should be displayed
    When I type "AI" in to search field
    When I click Find button
    Then search result is displayed

