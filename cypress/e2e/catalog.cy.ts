describe('Product Catalog Page', () => {
  beforeEach(() => {
    cy.bypassShopifyPasswordPage();
  });

  it('shows all expected products', () => {
    cy.visit('https://r0989643-realbeans.myshopify.com/collections/all');
    cy.contains('Blended coffee 5kg');
    cy.contains('Roasted coffee beans 5kg');
  });

  it('sorts by price correctly', () => {
    cy.visit('https://r0989643-realbeans.myshopify.com/collections/all?sort_by=price-ascending');
    // Check that products are ordered correctly
  });
});