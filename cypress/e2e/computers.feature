Feature: Computer Database Management

  Scenario Outline: Add a New Computer
    Given I am on the computer database page
    When I click the Add button
    And I add computer information from fixture "<ComputerName>"
    And I click on the Create button
    Then I should see the success message for adding "<ComputerName>"

    Examples:
      | ComputerName  |
      | Computer1      |
      | Computer2      |

  Scenario Outline: Add Computer with Bad Values
    Given I am on the computer database page
    When I click the Add button
    And I add bad computer information from fixture "<ComputerName>"
    And I click on the Create button
    Then I should see an error message for adding "<ComputerName>"

    Examples:
      | ComputerName  |
      | No Computer   |
      | Titanic   |
      | Rose   |
      | Jack  |
      | Patrick   |

  Scenario Outline: Filter Computers by Name
    Given I am on the computer database page
    When I type the computer name "<ComputerName>"
    And Click on the filter by name button
    Then I should see the "<ComputerName>" in the list

     Examples:
      | ComputerName          |
      | AN/FSQ-32             |
      | ASCI Blue Mountain    |
      | ARRA    |
      | ASCI Thors Hammer   |
      | APEXC    |

  Scenario: Order Computers by Name
    Given I am on the computer database page
    When I check the computers name order
    And Click on the Computer name
    Then I should see the computer name in reverse order

  Scenario: Order Computers by Company
    Given I am on the computer database page
    When I click on the company name
    And check the computers company order
    And I click on the company name
    Then I should see the company list in reverse order

  Scenario: Order Computers by Date Introduced
    Given I am on the computer database page
    When Click on the Introduced button
    And I check the computers date order
    And Click on the Introduced button
    Then I should see the introduced date list in reverse order

  Scenario: Order Computers by Date Discontinued
    Given I am on the computer database page
    When Click on the Discontinued button
    And I check the computers discontinued date order
    And Click on the Discontinued button
    Then I should see the discontinued date list in reverse order

  Scenario Outline: Edit a Computer
    Given I am on the computer database page
    When I select a computer "<ComputerName>"
    And Edit computer informations
    And click on Save this computer
    Then I should see the success message for editing "<ComputerName>"

     Examples:
      | ComputerName          |
      | AN/FSQ-32             |
      | ASCI Blue Mountain    |
      | ARRA    |
      | ASCI Thors Hammer   |
      | APEXC    |


  Scenario Outline: Edit Computer with Bad Values
    Given I am on the computer database page
    When I select a computer "<ComputerName>"
    And Edit computer with bad information
    And click on Save this computer
    Then I should see an error message for editing "<ComputerName>"

     Examples:
      | ComputerName          |
      | AN/FSQ-32             |
      | ASCI Blue Mountain    |
      | ARRA    |
      | ASCI Thors Hammer   |
      | APEXC    |


  Scenario Outline: Delete a Computer
    Given I am on the computer database page
    When I select a computer "<ComputerName>"
    And click on delete this Computer
    Then I should see the success message for deleting "<ComputerName>"

    Examples:
      | ComputerName          |
      | AN/FSQ-32             |
      | ASCI Blue Mountain    |
      | ARRA    |
      | ASCI Thors Hammer   |
      | APEXC    |
