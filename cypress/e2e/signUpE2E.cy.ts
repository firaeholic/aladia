describe('E2E tests different scenario', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('should login user', function() {
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
        cy.get('.num1').type('1');
        cy.get('.num2').type('3');
        cy.get('.num3').type('4');
        cy.get('.num4').type('5');
        cy.get('.num5').type('3');
        cy.get('.num6').type('1');
        cy.get('.number-input').each(($input) => {
            cy.wrap($input).should('not.have.value', '')
          });
        cy.get('.button').click();
        cy.get('.button').click();
        cy.get('.button').click();
        cy.get('.button').click();
        cy.compareSnapshot('user-logged');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('should show invalid code', function() {
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
        cy.get('.num1').type('1');
        cy.get('.num2').type('1');
        cy.get('.num3').type('1');
        cy.get('.num4').type('1');
        cy.get('.num5').type('1');
        cy.get('.num6').type('1');
        cy.get('.button').click();
        cy.get('.Vue-Toastification__toast--error')
        .should('be.visible')
        cy.compareSnapshot('incorrect-code');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('should show invalid credentials', function() {
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
        cy.get('.num1').type('1');
        cy.get('.num2').type('3');
        cy.get('.num3').type('4');
        cy.get('.num4').type('5');
        cy.get('.num5').type('3');
        cy.get('.num6').type('1');
        cy.get('.number-input').each(($input) => {
            cy.wrap($input).should('not.have.value', '')
        });
        cy.get('.button').click();
        cy.get('.button').click();
        cy.get('.button').click();
        cy.get('.password-field').clear();
        cy.get('.password-field').type('Jonathan21!');
        cy.get('.button').click();
        cy.compareSnapshot('wrong-pass');
        /* ==== End Cypress Studio ==== */
    });
})