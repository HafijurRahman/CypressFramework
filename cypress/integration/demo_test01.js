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

/*
it.('Login Test: Orange HRM', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#divUsername > .form-hint').type('Admin')
    cy.get('#txtPassword').type('admin123')

    cy.get('#btnLogin').click()

    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#btnAdd').click()
    //cy.wait(5000)
    cy.get('#btnSave').click()

})
*/

/*
it.('Assertion Tests', function(){

    cy.visit('https://example.cypress.io/')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a')
        .click()

    //Implying Assertions Implicit
        cy.get('#query-btn')
            .should('contain', 'Button')
            .should('have.class', 'query-btn')
            .should('be.visible')
            .should('be.enabled')

        cy.get('#query-btn').invoke('attr', 'id')
            .should ('equal', 'query-btn')

        //Chaining Assertions
        cy.get('#query-btn')
            .should('contain', 'Button')
            .and('have.class', 'query-btn')


    //Implying Assertions Explicit
        expect(true).to.be.true

        let name = 'Hafij'
        expect(name).to.be.equal('Hafij')


        assert.equal(4,4, 'Not Equal')
        assert.strictEqual(4, 4, 'Not Strictly Equal')

})
*/

//Importing from another folder
import {LoginPage} from "../pages/OrangeHRM_LoginPage";

//Creating Object
let loginPage = new LoginPage();

it.only('Page Object Model -- Login Test: Orange HRM', function(){

    //Test Steps
    loginPage.navigateURL('https://opensource-demo.orangehrmlive.com/')
        cy.get('#logInPanelHeading')
            .should('contain', 'LOGIN Panel')
        
    loginPage.enterUsername('Admin')
        cy.should('have.id', 'txtUsername')

    loginPage.enterPassword('admin123')
        cy.should('have.id', 'txtPassword')
         
        cy.get('#btnLogin')
            .should('contain', 'LOGIN')
    
    loginPage.ClickToLogin()
        
        cy.get('h1')
            .should('contain', 'Dashboard')

})