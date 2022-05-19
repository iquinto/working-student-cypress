
const URL = Cypress.env("BASE_URL")

describe('Reject reservations', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_STUDENT'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('Reject reservations', () => {
            cy.get('td.state-row').eq(1).contains('Pendiente')
            cy.get('svg[data-action="reservation-reject-btn"]').eq(0).click()
            cy.wait(500)
            cy.get('#accept-delete-btn').click()
            cy.wait(2000)
            cy.get('td.state-row').eq(0).contains('Aceptado')
            cy.get('#reservation-table-body').find('tr').should('have.length', 1)
        })
    }
);


describe('Check employer notification after reject', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_EMPLOYER'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('Check student notification after reservation', () => {
            cy.get('#dropdownMenu3').click()
            cy.get('#not-list').find('li[data-notification="item"]')
                .should('have.length', 2)
        })
    }
);