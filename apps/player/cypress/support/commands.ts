Cypress.Commands.add('visitArtistsList', () => {
  cy.visit('/');
  cy.url().should('include', '/artists');
});

Cypress.Commands.add('waitForArtistsToLoad', () => {
  cy.get('[data-testid="artists-list"]', { timeout: 15000 }).should('be.visible');
  cy.get('[data-testid="artist-card"]').should('have.length.greaterThan', 0);
});

Cypress.Commands.add('clickFirstArtist', () => {
  cy.get('[data-testid="artist-card"]').first().click();
});

Cypress.Commands.add('waitForArtistDetailsToLoad', () => {
  cy.url().should('include', '/artist/');
  cy.get('[data-testid="artist-details"]', { timeout: 15000 }).should('be.visible');
  cy.get('[data-testid="artist-name"]').should('be.visible');
});
