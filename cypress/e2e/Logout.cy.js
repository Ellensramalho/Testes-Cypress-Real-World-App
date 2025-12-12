describe('Notificações', () => {
    it('Clicar em notificações', () => {
        cy.visit('localhost:3000')
        cy.get('#username').type('Tavares_Barrows');
        cy.get('#password').type('s3cret');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();


      cy.wait(3000) 

      cy.contains('span', 'Logout').click()
    })
})