declare namespace Cypress {
    interface Chainable<Subject = any> {
      compareSnapshot(name: string, options?: any): Chainable<Subject>;
    }
  }