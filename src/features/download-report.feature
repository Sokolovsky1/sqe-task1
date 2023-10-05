@download-report
Feature: Download report

  Background: Open about page and maximize window
    Given I am on the about page
    When I maximize window

  Scenario Outline: Check that allows to download report 
    When I click on download button in EPAM at a Glance section
    Then file should be downloaded with "EPAM_Corporate_Overview_2023" name and "pdf" extension


