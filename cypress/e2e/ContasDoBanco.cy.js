describe('Criação de conta', () => {
    const uniqueBank = `Bank_${Cypress._.random(0, 10000)}`;
    const numeros = Math.floor(100000000 + Math.random() * 900000000).toString();
    it('Clicar em Bank Accounts e criar conta', () => {
        cy.visit('localhost:3000')
        cy.get('#username').type('Tavares_Barrows');
        cy.get('#password').type('s3cret');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

        cy.contains('span', 'Bank Account').click()

        cy.get('[data-test="bankaccount-new"]').click()

        cy.get('#bankaccount-bankName-input').type(uniqueBank);
        cy.get('#bankaccount-routingNumber-input').type(numeros);
        cy.get('#bankaccount-accountNumber-input').type(numeros);

        cy.get('button[type=submit]').click();

    })

})