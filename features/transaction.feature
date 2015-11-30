Feature: Transaction saving

  Scenario: A transaction is saved happy flow
    When I open the transaction page
    And select "account 1"
    And insert amount "500"
    And insert date "01-12-2015"
    And click the save button
    Then the transaction is saved
