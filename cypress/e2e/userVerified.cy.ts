describe('User Verificaion Test', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('should redirect the user to type their password', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('localhost:3000');
        cy.get('.email-field').type('ethan@winters.com');
        cy.get('.button').click();
        cy.get('.name-field').type('Etan');
        cy.get('.surname-field').clear();
        cy.get('.surname-field').type('Dark');
        cy.get('.password-field').type('Ethanwinter1!');
        cy.get('.confirm-field').clear();
        cy.get('.confirm-field').type('Ethanwinter1!');
        cy.get('#accept').check();
        cy.get('.button').click();
        cy.get('.num1').click();
        cy.get('.num1').type('1');
        cy.get('.num2').type('3');
        cy.get('.num3').type('4');
        cy.get('.num4').type('5');
        cy.get('.num5').type('3');
        cy.get('.num6').type('1');
        cy.get('.button').click();
        cy.get('.button').click();
        cy.get('.email-field').click();
        cy.get('.button').click();
        cy.compareSnapshot('user-verified');
        /* ==== End Cypress Studio ==== */
    });

    it('should prompt the user to enter the verification code sent', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('localhost:3000');
        cy.get('.email-field').type('ethan@winters.com');
        cy.get('.button').click();
        cy.get('.name-field').type('Etan');
        cy.get('.surname-field').clear();
        cy.get('.surname-field').type('Dark');
        cy.get('.password-field').type('Ethanwinter1!');
        cy.get('.confirm-field').clear();
        cy.get('.confirm-field').type('Ethanwinter1!');
        cy.get('#accept').check();
        cy.get('.button').click();
        cy.get('.to-login').click();
        cy.get('.email-field').click();
        cy.get('.button').click();
        cy.compareSnapshot('not-verified');

        /* ==== End Cypress Studio ==== */
  });
})