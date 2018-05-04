Feature: Duck Duck go
  I search duck duck go
 

  Scenario: Search duck duck go
    Given I go to duck duck go
    When  I search for WebdriverIO
    Then  I should see the search results
 