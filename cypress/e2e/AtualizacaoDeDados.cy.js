describe('Fazer transação', () => {
  it('Atualizar dados na conta', () => {
    cy.visit('localhost:3000')
    cy.get('#username').type('Tavares_Barrows');
    cy.get('#password').type('s3cret');
    cy.get('input[type="checkbox"]').check();  
    cy.get('button[type="submit"]').click();

    cy.contains('span', 'My Account').click()
    cy.get('#user-settings-email-input')
    .clear({ force: true })
    .type('Tavares_Barrows@teste.com')
    cy.get('#user-settings-phoneNumber-input')
    .clear({ force: true })
    .type('99112233', { force: true })

    cy.get('[data-test= "user-settings-submit"]').click()
  })
})