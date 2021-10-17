/// <reference path="../support/commands.d.ts" />

it('successfully login', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.loginSession(
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD'),
    { cacheSession: false }
  )

  cy.wait('@getNotes')
})