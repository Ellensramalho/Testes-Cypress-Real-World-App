describe('Fluxo completo de cadastro, login e onboarding', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/signin')
  })

  it('Cadastro + Login + Onboarding', () => {
  
    cy.contains('Sign Up').click()
    cy.get('#firstName').type('Tavares')
    cy.get('#lastName').type('Barrows')
    cy.get('#username').type('Tavares_Barrows')
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').type('s3cret')
    cy.get('button[type="submit"]').click()

    cy.get('#username').type('Tavares_Barrows')
    cy.get('#password').type('s3cret')
    cy.get('input[type="checkbox"]').check()
    cy.get('button[type="submit"]').click()

     cy.get('body').then(($body) => {
      if ($body.find('[data-test="user-onboarding-next"]').length > 0) {
        cy.get('[data-test="user-onboarding-next"]').click()
      }
    })

    cy.get('body').then(($body) => {
      if ($body.find('#bankaccount-bankName-input').length > 0) {

    
    cy.get('#bankaccount-bankName-input').type('TesterBank')
    cy.get('#bankaccount-routingNumber-input').type('123456789')
    cy.get('#bankaccount-accountNumber-input').type('123456789')
    cy.get('button[type=submit]').click()

    cy.get('[data-test="user-onboarding-next"]').click()

  }
})
})
})
