describe('Convert savings to crypto', () => {
  it('login to bank application', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#username').type('admin');
    cy.get('#password').type('admin');
    cy.wait(1000);
    cy.get('#login').click();
    cy.wait(1000);
  })

  it('convert savings to crypto currency', () => {
    cy.wait(2000);
  })

  it('logout from bank application', () => {
    cy.get('#logout').click();
    cy.wait(2000)
  })
})