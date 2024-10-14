describe('Password Testing', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('should display password is strong and no other errors', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.email-field').type('someone@example.com');
        cy.get('.button').click();
        cy.get('.password-field').type('FangYuan1!');
        cy.get('.confirm-field').type('FangYuan1!');
        cy.get('.pass-error').should('have.text', 'Strong Password');
        cy.compareSnapshot('strong-password');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('should display password needs atleast 8 characters', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.email-field').type('someone22@example.com');
        cy.get('.button').click();
        cy.get('.password-field').type('Fang1!');
        cy.get('.confirm-field').type('Fang1!');
        cy.compareSnapshot('password-short');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('should display password needs atleast 1 upper case character', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.email-field').type('someone@example.com');
        cy.get('.button').click();
        cy.get('.password-field').type('abcde123');
        cy.get('.pass-error').should('have.text', 'Upper case letter required');
        cy.compareSnapshot('upper-case');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('should display password needs atleast 1 number', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.email-field').type('someone@example.com');
        cy.get('.button').click();
        cy.get('.password-field').type('Abcdefgh');
        cy.get('.pass-error').should('have.text', 'Number required');
        cy.compareSnapshot('number-needed');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('should display password needs atleast 1 symbol', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.email-field').type('someone@example.com');
        cy.get('.button').click();
        cy.get('.password-field').type('Abcdefgh1');
        cy.get('.pass-error').should('have.text', 'Symbol required(@$!%*?&)');
        cy.compareSnapshot('symbol-needed');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('should display that passwords do not match', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.email-field').type('someone@example.com');
        cy.get('.button').click();
        cy.get('.password-field').type('Abcdefgh1!');
        cy.get('.confirm-field').type('Abcdefgh1');
        cy.get('.pass-error').should('have.text', 'Strong Password');
        cy.get('.mismatch-field').should('have.text', " Passwords don't match ");
        cy.compareSnapshot('mismatch');
        /* ==== End Cypress Studio ==== */
    });
})