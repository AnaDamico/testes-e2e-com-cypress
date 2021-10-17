/// <reference path="../support/commands.d.ts" />

it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')
  cy.login()
  cy.wait('@getNotes')
})