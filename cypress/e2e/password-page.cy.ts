describe('Password Page', () => {
    it('logs in through the password page', () => {
        cy.visit('https://r0989643-realbeans.myshopify.com/');
        cy.get('input[type="password"]').type('siruse'); // Replace with your actual password
        cy.get('button').contains('Enter').click();
    });
});