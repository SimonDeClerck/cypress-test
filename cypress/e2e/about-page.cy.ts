describe('About Page', () => {
  beforeEach(() => {
    cy.bypassShopifyPasswordPage();
  });

  it('includes the company history paragraph', () => {
    cy.visit('https://r0989643-realbeans.myshopify.com/pages/about-us');
    cy.contains('From a small Antwerp grocery to a European coffee staple');
  });
});