describe('Valid Email Test', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('should contain a valid email', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/')
    cy.get('.email-field').type('someone@example.com');
    cy.get('.button').click();
    cy.compareSnapshot('valid-email');
    /* ==== End Cypress Studio ==== */
  })

  it('should contain an invalid email', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('.email-field').type('someone');
    cy.get('.button').click();
    cy.get('.next-page').should('not.exist');
    cy.compareSnapshot('invalid-email');
    /* ==== End Cypress Studio ==== */
  });

  it('should contain an existing email', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('.email-field').type('someone2@example.com');
    cy.get('.button').click();
    cy.get('.login-page').should('be.visible');
    cy.compareSnapshot('existing-email');
    /* ==== End Cypress Studio ==== */
  });
})