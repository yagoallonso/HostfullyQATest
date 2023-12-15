import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";



Given("I am on the computer database page", () => {
  cy.visit('/');
  cy.get('h1.fill > .fill').contains('Computer database');
});

When("I click the Add button", () => {
  cy.get('#add').click();
  cy.get('#main > h1').contains('Add a computer');
});

And("I add computer information from fixture {string}", (fixtureName) => {
  cy.fixture('good_computers.json').then((data) => {
    const computerData = data.computers.find((computer) => computer.name === fixtureName);

    if (!computerData) {
      throw new Error(`Fixture with name ${fixtureName} not found.`);
    }

    cy.get('#name').type(computerData.name);
    cy.get('#introduced').type(computerData.introduced);
    cy.get('#discontinued').type(computerData.discontinued);
    cy.get('#company').select(computerData.company);
  });
});
And("I add bad computer information from fixture {string}", (fixtureName) => {
  cy.fixture('bad_computers.json').then((data) => {
    const computerData = data.computers.find((computer) => computer.name === fixtureName);

    if (!computerData) {
      throw new Error(`Fixture with name ${fixtureName} not found.`);
    }

    cy.get('#name').type(computerData.name);
    cy.get('#introduced').type(computerData.introduced);
    cy.get('#discontinued').type(computerData.discontinued);
    cy.get('#company').select(computerData.company);
  });
});

Then("I click on the Create button", () => {
   cy.get('.primary').click();}
);
And("I click on next",()=>{
  cy.get('.next > a').click()
})
And("I click on the company name",()=>{
  cy.get('.col-company > a').click()
})

Then("I should see the success message for adding {string}", (computerName) => {
  cy.get('.alert-message').contains(`Done ! Computer ${computerName} has been created`);
});

When("I type the computer name {string}", (computerName) => {
  cy.get('#searchbox').type(computerName)
});
And("Click on the filter by name button",()=>{
  cy.get('#searchsubmit').click();
})
Then("I should see the {string} in the list", (computerName) => {
  cy.fixture('good_computers.json').then((data) => {
    const computerExists = data.computers.some(computer => computer.name === computerName);

    if (!computerExists) {
      cy.get('em').contains('Nothing to display');
    }
    else{
      cy.get('tbody > tr > :nth-child(1)').contains(computerName);
    }
  });
});
When("I check the computers name order", () => {
  const computerNameSelector = 'tbody tr td:nth-child(1) a';

  cy.get(computerNameSelector).then(($computerNames) => {
    const computerNames = $computerNames.map((index, element) => Cypress.$(element).text()).get();

    for (let i = 0; i < computerNames.length - 1; i++) {
      expect(computerNames[i].localeCompare(computerNames[i + 1])).to.be.at.most(0);
    }
  });
});
And("Click on the Computer name",()=>{
  cy.get('.col-name > a').click();
})
And("Click on the Introduced button",()=>{
  cy.get('.col-introduced > a').click()
})
And("Click on the Discontinued button",()=>{
  cy.get('.col-discontinued > a').click()
})
Then("I should see the computer name in reverse order",()=>{
  const computerNameSelector = 'tbody tr td:nth-child(1) a';

  cy.get(computerNameSelector).then(($computerNames) => {
    const computerNames = $computerNames.map((index, element) => Cypress.$(element).text()).get();

    for (let i = 0; i < computerNames.length - 1; i++) {
      expect(computerNames[i].localeCompare(computerNames[i + 1])).to.be.at.least(0);
    }
  });
})

When("check the computers company order", () => {
  const companyNameSelector = 'tbody tr td:nth-child(4)';

  cy.get(companyNameSelector).then(($companyNames) => {
    const companyNames = $companyNames.map((index, element) => Cypress.$(element).text()).get();

    for (let i = 0; i < companyNames.length - 1; i++) {
      expect(companyNames[i].localeCompare(companyNames[i + 1])).to.be.at.most(0);
    }
  });
});
Then("I should see the company list in reverse order", () => {
  const companyNameSelector = 'tbody tr td:nth-child(4)';

  cy.get(companyNameSelector).then(($companyNames) => {
    const companyNames = $companyNames.map((index, element) => Cypress.$(element).text()).get();
    for (let i = 0; i < companyNames.length - 1; i++) {
      expect(companyNames[i].localeCompare(companyNames[i + 1])).to.be.at.least(0);
    }
  });
});
When("I check the computers date order", () => {
  const introducedDateSelector = 'tbody tr td:nth-child(2)';

  cy.get(introducedDateSelector).then(($introducedDates) => {
    const introducedDates = $introducedDates.map((index, element) => Cypress.$(element).text()).get();

    if (introducedDates.every(date => date === '-')) {
      cy.log('Todas as datas são "-", encerrando o teste.');
    } else {
      
      for (let i = 0; i < introducedDates.length - 1; i++) {
        const current = new Date(introducedDates[i]);
        const next = new Date(introducedDates[i + 1]);
        expect(current.getTime()).to.be.lte(next.getTime());
      }
    }
  });
});
Then("I should see the introduced date list in reverse order", () => {
  const introducedDateSelector = 'tbody tr td:nth-child(2)';

  cy.get(introducedDateSelector).then(($introducedDates) => {
    const introducedDates = $introducedDates.map((index, element) => Cypress.$(element).text()).get();

    
    if (introducedDates.every(date => date === '-')) {
      cy.log('Todas as datas são "-", encerrando o teste.');
    } else {
     
      for (let i = 0; i < introducedDates.length - 1; i++) {
        const current = new Date(introducedDates[i]);
        const next = new Date(introducedDates[i + 1]);
        expect(current.getTime()).to.be.gte(next.getTime());
      }
    }
  });
});
When("I check the computers discontinued date order", () => {
  const discontinuedDateSelector = 'tbody tr td:nth-child(3)';

  cy.get(discontinuedDateSelector).then(($discontinuedDates) => {
    const discontinuedDates = $discontinuedDates.map((index, element) => Cypress.$(element).text()).get();
    if (discontinuedDates.every(date => date === '-')) {
      cy.log('Todas as datas são "-", encerrando o teste.');
    }
    else{
   
    for (let i = 0; i < discontinuedDates.length - 1; i++) {
      const current = new Date(discontinuedDates[i]);
      const next = new Date(discontinuedDates[i + 1]);
      expect(current.getTime()).to.be.gte(next.getTime());
    }}
  });
});
Then("I should see the discontinued date list in reverse order", () => {
  const introducedDateSelector = 'tbody tr td:nth-child(3)';

  cy.get(introducedDateSelector).then(($introducedDates) => {
    const introducedDates = $introducedDates.map((index, element) => Cypress.$(element).text()).get();

   
    if (introducedDates.every(date => date === '-')) {
      cy.log('Todas as datas são "-", encerrando o teste.');
    } else {
      
      for (let i = 0; i < introducedDates.length - 1; i++) {
        const current = new Date(introducedDates[i]);
        const next = new Date(introducedDates[i + 1]);
        expect(current.getTime()).to.be.gte(next.getTime());
      }
    }
  });
});
When("I select a computer {string}", (computerName) => {
  cy.contains('tbody td a', computerName).click();
});

And("Edit computer informations",()=>{
  cy.get('#name').invoke('val').then((currentValue) => {
    
    const newValue = `${currentValue} edited`;
  
    
    cy.get('#name').clear().type(newValue);
  });
  
})
And("Edit computer with bad information",()=>{
  cy.get('#name').clear()
  cy.get('#introduced').type('!@#')
  cy.get('#discontinued').type('!@#')
  });
Then('I should see an error message for adding {string}',()=>{
  cy.get('fieldset > :nth-child(1)').should('exist')
  cy.get('fieldset > :nth-child(2)').should('exist')
  cy.get('fieldset > :nth-child(3)').should('exist')
})
Then('I should see an error message for editing {string}',()=>{
  cy.get('fieldset > :nth-child(1)').should('exist')
  cy.get('fieldset > :nth-child(2)').should('exist')
  cy.get('fieldset > :nth-child(3)').should('exist')
})
And("click on Save this computer",()=>{
  cy.get('#introduced').invoke('val').then((introducedValue) => {
    cy.get('#discontinued').invoke('val').then((discontinuedValue) => {
      if (introducedValue === '0' || discontinuedValue === '0') {
        cy.get('.primary').click();
        cy.get('.error').should('exist');
      }
      else{

      
      cy.get('.primary').click();}
    });
  });
})
Then("I should see the success message for editing {string}",(computerName)=>{
  const expectedWord = "edited";
  const updateMessage = "has been updated";
  cy.get('.alert-message').invoke('text').then((text) => {
    const containsExpectedWord = text.includes(expectedWord);
    const containsExpectedComputerName = text.includes(computerName);
    const containsUpdateMessage = text.includes(updateMessage);

    expect(containsExpectedWord && containsExpectedComputerName && containsUpdateMessage).to.be.true;
  });
  
})
And("click on delete this Computer",()=>{
  cy.get('input[value="Delete this computer"]').click({ force: true });


})
Then("I should see the success message for deleting {string}",(computerName)=>{
  const updateMessage = "has been deleted";
  cy.get('.alert-message').invoke('text').then((text) => {
    const containsExpectedComputerName = text.includes(computerName);
    const containsUpdateMessage = text.includes(updateMessage);

      expect(containsExpectedComputerName && containsUpdateMessage).to.be.true;
  });
  
})



