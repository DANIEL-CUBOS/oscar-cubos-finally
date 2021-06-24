/* eslint-disable no-undef */


describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.button-green').then(($myElement) => {
            $myElement.click()
        })
    })
})

