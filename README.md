# Hostfully QA Test

This project demonstrates the integration of Cypress with Cucumber for behavior-driven testing.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Writing Features](#writing-features)

## Getting Started


### Prerequisites


Before you start, ensure you have the following software/tools installed:

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Cypress Cucumber Preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yagoallonso/HostfullyQATest.git
cd HostfullyQATest
npm install
```
## Running Tests
```bash
npm test
```
This command will launch Cypress and execute the Cucumber feature files.

## Folder Structure

cypress/e2e: Contains the Cucumber feature files.
cypress/e2e/computers: Contains the Javascript for the steps.
cypress/fixtures: JSON fixtures for test data.

## Writing Features

Cucumber features are written in the cypress/e2e folder. 
Follow the Gherkin syntax for feature files. For example:

```gherkin
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
```
## Author

Yago Alonso is the author of this code.

