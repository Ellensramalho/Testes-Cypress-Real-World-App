describe('Filtros', () => {
    it('Selecionar e filtrar', () => {
        cy.visit('localhost:3000')
        cy.get('#username').type('Tavares_Barrows');
        cy.get('#password').type('s3cret');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

        cy.contains('span', 'Date: ALL').click({ force: true })
        cy.get('button.react-calendar__tile').contains('2').click()
        cy.get('button.react-calendar__tile').contains('10').click()

        cy.wait(1000)

        cy.get('[data-test="transaction-list-filter-date-clear-button"]').click({ force: true });

        cy.contains('span', 'Amount: $0 - $1,000').click({ force: true })

        cy.get('[data-test="transaction-list-filter-amount-range-slider"] input')
            .eq(0)
            .invoke('val', 11.1)
            .trigger('change', { force: true });

        cy.get('[data-test="transaction-list-filter-amount-range-slider"] input')
            .eq(0)
            .click({ force: true });

        cy.wait(1000)

        cy.get('[data-test="transaction-list-filter-amount-clear-button"]').click({force:true})


    })
})