
const URL = Cypress.env("BASE_URL")
describe('View history or evolution', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_STUDENT'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('View history or evolution', () => {
            cy.get('#evolution-section').contains('Evolución mensual de reservas')
            cy.get('#data').select('2019')
            cy.wait(500)
            cy.get('g.apexcharts-series').find('path').should('have.length', 12)
            cy.get('g.apexcharts-series> path').eq(11).invoke('attr', 'val').should('eq', '5')


            cy.get('#data').select('2020')
            cy.wait(500)
            cy.get('g.apexcharts-series').find('path').should('have.length', 12)
            cy.get('g.apexcharts-series> path').eq(11).invoke('attr', 'val').should('eq', '1')


            cy.get('#data').select('2021')
            cy.wait(500)
            cy.get('g.apexcharts-series').find('path').should('have.length', 12)
            cy.get('g.apexcharts-series> path').eq(11).invoke('attr', 'val').should('eq', '3')


            cy.get('#data').select('2022')
            cy.wait(500)
            cy.get('g.apexcharts-series').find('path').should('have.length', 12)
            cy.get('g.apexcharts-series> path').eq(11).invoke('attr', 'val').should('eq', '0')

        })
    }
);
