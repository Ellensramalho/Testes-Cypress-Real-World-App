describe('Deletar Conta', () => {  
    it('Clicar em Bank Accounts e depois excluir conta', () => {
        cy.visit('localhost:3000')
        cy.get('#username').type('Tavares_Barrows');
        cy.get('#password').type('s3cret');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

        cy.contains('span', 'Bank Account').click()

        cy.get('[data-test="bankaccount-delete"]')
        .eq(5)
        .click({ force: true });

    })

    })