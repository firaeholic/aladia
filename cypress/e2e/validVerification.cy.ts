describe('Code inputted test', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('should verify user upon valid code', () => {
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
    cy.get('.done-page').should('exist');
    cy.compareSnapshot('verify-success');
        /* ==== End Cypress Studio ==== */
  })
  
  it('should not proceed unless every input is filled', function() {
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
    cy.get('.number-input').filter((index, input) => {
        return Cypress.$(input).val() === '';
    }).should('have.length.greaterThan', 0); 
    cy.get('.button').click();
    cy.get('.done-page').should('not.exist');
        cy.compareSnapshot('all-input-needed');
        /* ==== End Cypress Studio ==== */
  });

  it('should show error upon invalid code', () => {
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
    cy.get('.number-input').each(($input) => {
        cy.wrap($input).should('not.have.value', '')
      });
    cy.get('.button').click();
    cy.get('.Vue-Toastification__toast--error')
      .should('be.visible')
        cy.compareSnapshot('invalid-code');
        /* ==== End Cypress Studio ==== */
  })
})