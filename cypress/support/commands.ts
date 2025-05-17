/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// 1. Register the custom command
Cypress.Commands.add('bypassShopifyPasswordPage', function () {
  cy.visit('https://r0989643-realbeans.myshopify.com/'); // replace with your actual store URL
  cy.get('input[type="password"]').type('siruse');
  cy.get('button').contains('Enter').click();
});

// 2. Extend Cypress types
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Bypasses Shopify password page for dev mode
       */
      bypassShopifyPasswordPage(): Chainable<void>;
    }
  }
}

// 3. Required for TS module resolution (no-op export)
export {};