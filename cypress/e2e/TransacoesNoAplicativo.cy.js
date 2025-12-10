describe('Fazer transação', () => {
  it('Clicar em botão new e fazer nova transação', () => {
    cy.visit('localhost:3000')
    cy.get('#username').type('Tavares_Barrows');
    cy.get('#password').type('s3cret');
    cy.get('input[type="checkbox"]').check();  
    cy.get('button[type="submit"]').click();
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.contains('span', 'Santos.Runte65@gmail.com').click({force: true})
    cy.get('#amount').type('1500')
    cy.get('#transaction-create-description-input').type('Valor do aluguel.')
    cy.get('[data-test="transaction-create-submit-payment"]')
    .should('not.be.disabled')
    .click();

    cy.get('[data-test="new-transaction-return-to-transactions"]').click()


  })
  })