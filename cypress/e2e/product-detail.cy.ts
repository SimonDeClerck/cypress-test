describe('Product Detail Pages', () => {
  beforeEach(() => {
    cy.bypassShopifyPasswordPage();
  });

  it('displays correct description, price, and image for Blended Coffee 5kg', () => {
    cy.visit('https://r0989643-realbeans.myshopify.com/products/blended-coffee-5kg');
    cy.contains('€55,00 EUR');
    cy.get('img').should('exist');
    cy.contains('Blended coffee 5kg');
  });
});