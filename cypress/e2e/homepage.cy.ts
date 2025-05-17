describe('Homepage Content', () => {
  beforeEach(() => {
    cy.bypassShopifyPasswordPage();
  });

  it('shows the products and intro text', () => {
    cy.visit('https://r0989643-realbeans.myshopify.com/');
    cy.contains('Since 1801, RealBeans has roasted premium coffee');
  });

  it('lists products', () => {
    cy.get('.featured-products .product-card, .grid__item').should('have.length.at.least', 1);
  });
});