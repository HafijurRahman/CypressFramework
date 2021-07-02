/// <reference types ="cypress" />

export class LoginPage{

    //Objects & Locators
    loginPage_userName = '#txtUsername'
    loginPage_passWord = '#txtPassword'
    loginPage_loginButton = '#btnLogin'


    //Methods 
    navigateURL(url){
        cy.visit(url)
    }

    enterUsername(username){
        cy.get(this.loginPage_userName)
            .type(username)
    }

    enterPassword(password){
        cy.get(this.loginPage_passWord)
            .type(password)
    }

    ClickToLogin(){
        cy.get(this.loginPage_loginButton)
            .click()
    }

}