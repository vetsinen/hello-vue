/// <reference types="Cypress" />

context('Window', () => {
    beforeEach(() => {
        cy.visit('https://ukr.net')
    })

    it('cy.title() - get the title', () => {
        // https://on.cypress.io/title
        cy.title().should('include', 'новини')
    })
})