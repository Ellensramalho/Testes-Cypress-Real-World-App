describe('Filtros', () => {  
    it('Selecionar e filtrar', () => {
        cy.visit('localhost:3000')
        cy.get('#username').type('Tavares_Barrows');
        cy.get('#password').type('s3cret');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

        cy.contains('span', 'Date: ALL').click({force:true})
        cy.get('button.react-calendar__tile').contains('2').click()
        cy.get('button.react-calendar__tile').contains('10').click()

        cy.wait(1000)

        cy.get('[data-test="transaction-list-filter-date-clear-button"]').click({ force: true });



    })
})