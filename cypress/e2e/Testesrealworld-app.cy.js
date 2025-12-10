describe('Fluxo completo de cadastro, login e onboarding', () => {
  const uniqueUsername = `Tavares_${Cypress._.random(0, 10000)}`;
  const password = 's3cret';
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/signin');
  });

  it('Cadastro + Login + Onboarding Completo', () => {
  
    cy.log('1. Iniciando o cadastro de um novo usuário');
    cy.contains('Sign Up').click();
    
  
    cy.get('#firstName').type('Tavares');
    cy.get('#lastName').type('Barrows');
    cy.get('#username').type(uniqueUsername); 
    cy.get('#password').type(password);
    cy.get('#confirmPassword').type(password);
    
    
    cy.get('button[type="submit"]').click();

    
    cy.log('2. Realizando o Login');
    cy.get('#username', { timeout: 10000 }).should('be.visible'); 
    

    cy.get('#username').type(uniqueUsername);
    cy.get('#password').type(password);
    
    cy.get('input[type="checkbox"]').check(); 
    
    cy.get('button[type="submit"]').click();
    
  
    cy.log('3. Onboarding: Etapa de saudação');
    
    
    cy.get('[data-test="user-onboarding-next"]', { timeout: 10000 })
      .should('be.visible') 
      .click();


    cy.log('4. Onboarding: Cadastro da conta bancária');
    

    cy.get('#bankaccount-bankName-input', { timeout: 10000 })
      .should('be.visible');
      
    cy.get('#bankaccount-bankName-input').type('TesterBank');
    cy.get('#bankaccount-routingNumber-input').type('123456789');
    cy.get('#bankaccount-accountNumber-input').type('123456789');
    
    cy.get('button[type=submit]').click();


    cy.log('5. Onboarding: Conclusão');
    
    cy.get('[data-test="user-onboarding-next"]', { timeout: 10000 })
      .should('be.visible')
      .click();
      

  });
});

  it.only('Fazer transação', () => {
    cy.visit('localhost:3000')
    cy.get('#username').type('Tavares_Barrows');
    cy.get('#password').type('s3cret');
    cy.get('input[type="checkbox"]').check();  
    cy.get('button[type="submit"]').click();
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.contais('span', 'Santos.Runte65@gmail.com').click({force: true})


  })