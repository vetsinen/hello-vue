/// <reference types="Cypress" />

context('Window', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    });

    it('cy.title() - get the title', () => {
        // https://on.cypress.io/title
        cy.title().should('include', 'hello-vue')
    });
})