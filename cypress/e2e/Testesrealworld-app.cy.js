describe('Visitar site', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signin')
  })

  it('Se cadastrar', () => {
    cy.contains('Sign Up').click()
    cy.get('#firstName').type('Tavares')
    cy.get('#lastName').type('Barrows')
    cy.get('#username').type('Tavares_Barrows')
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').type('s3cret')
    cy.get('button[type=submit]').click()

  })

  it('Prencher campos para se inscrever', () => {
    cy.get('#username').type('Tavares_Barrows')
    cy.get('#password').type('s3cret')
    cy.get('input[type=checkbox').check()
    cy.get('button[type=submit]').click()
  })
})