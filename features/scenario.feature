Feature: Figure1 registration
  I registered an account at figure1
 
  Scenario: Registration for figure1 account  
    Given I go to figure1
    When  I sign up with valid credentials
    Then  I should see my account registered

