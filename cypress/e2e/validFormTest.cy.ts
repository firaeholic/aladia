describe('Form Validity', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('should redirect to code verification page', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.email-field').type('someone@example.com');
        cy.get('.button').click();
        cy.get('.name-field').type('Jonathan');
        cy.get('.surname-field').type('Brad');
        cy.get('.password-field').type('Jonathan1!');
        cy.get('.confirm-field').type('Jonathan1!');
        cy.get('#accept').check();
        cy.get('.button').click();
        cy.compareSnapshot('valid-form');
        /* ==== End Cypress Studio ==== */
    });

    it('should not proceed if atleast one field is empty', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.email-field').type('someone@example.com');
        cy.get('.button').click();
        cy.get('.name-field').type('Jonathan');
        cy.get('.password-field').type('Jonathan1!');
        cy.get('.confirm-field').type('Jonathan1!');
        cy.get('#accept').check();
        cy.get('.button').click();
        cy.compareSnapshot('invalid-form');
        /* ==== End Cypress Studio ==== */
    });

    it('should not proceed if terms agreement is not checked', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:3000/');
        cy.get('.email-field').type('someone@example.com');
        cy.get('.button').click();
        cy.get('.name-field').type('Jonathan');
        cy.get('.surname-field').type('Jonathan');
        cy.get('.password-field').type('Jonathan1!');
        cy.get('.confirm-field').type('Jonathan1!');


        cy.get('.button').click();
        cy.compareSnapshot('terms-unchecked');
        /* ==== End Cypress Studio ==== */
    });

})