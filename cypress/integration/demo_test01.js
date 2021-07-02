/// <reference types ="cypress" />


it('Google Test', function(){

    cy.visit('https://google.com/')
    //Get specific element
    cy.get('.gLFyf').type('Automation test with Cypress{enter}')

    //Timeout
    //cy.get('.gLFyfx', {timeout: 6000}).type('Automation test with Cypress{enter}')

    //Click specific element
    //cy.get('[href="https://www.cypress.io/"] > .LC20lb').click()

    //Imply Hard Wait
    cy.wait(5000)

    //Get elements by texts
    cy.contains('End to End').click()

})


it.only('Login Test: Orange HRM', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#divUsername > .form-hint').type('Admin')
    cy.get('#txtPassword').type('admin123')

    cy.get('#btnLogin').click()

    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#btnAdd').click()
    //cy.wait(5000)
    cy.get('#btnSave').click()

})