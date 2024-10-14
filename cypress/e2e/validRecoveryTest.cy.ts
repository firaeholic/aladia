describe('Valid Recovery Email Test', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('should send recovery link through given email', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('localhost:3000');
        cy.get('.email-field').type('someone2@example.com');
        cy.get('.button').click();
        cy.get('.recover-account').click();
        cy.get('.recovery-email').type('someone2@example.com');
        cy.get('.button').click();
        cy.get('.recover-email').should('be.visible');
        cy.compareSnapshot('send-recovery');
        /* ==== End Cypress Studio ==== */
    });

    it('should display that the email does not exist', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('localhost:3000');
        cy.get('.email-field').type('someone2@example.com');
        cy.get('.button').click();
        cy.get('.recover-account').click();
        cy.get('.recovery-email').type('someone@example.com');
        cy.get('.button').click();
        cy.get('.Vue-Toastification__toast--error')
            .should('be.visible')
        cy.compareSnapshot('email-not-exist');
        /* ==== End Cypress Studio ==== */
    });
})