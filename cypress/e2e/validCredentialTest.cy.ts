describe('Valid Credential Test', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('should login the user and redirect to next page', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('localhost:3000');
        cy.get('.email-field').type('someone2@example.com');
        cy.get('.button').click();
        cy.get('.password-field').type('User2!aaa');
        cy.get('.button').click();
        cy.compareSnapshot('user-verified');
        /* ==== End Cypress Studio ==== */
    });

    it('should not login the user', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('localhost:3000');
        cy.get('.email-field').type('someone2@example.com');
        cy.get('.button').click();
        cy.get('.password-field').type('User2!aa');
        cy.get('.button').click();
        cy.get('.Vue-Toastification__toast--error')
            .should('be.visible')
        cy.compareSnapshot('user-unverified');

        /* ==== End Cypress Studio ==== */
    });
})