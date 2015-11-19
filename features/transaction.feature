Feature: Transaction saving

  Scenario: A transaction is saved happy flow
    Given an account with name "account 1"
    When I open the transaction page
    And select "account 1"
    And insert amount "500"
    And insert date "2015-12-01"
    And click the save button
    Then the transaction is saved
