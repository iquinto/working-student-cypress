
const URL = Cypress.env("BASE_URL")

describe('Cancel reservations', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_EMPLOYER'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })



        it('Cancel reservations', () => {
            cy.get('svg[data-action="reservation-delete-btn"]').first().click()
            cy.wait(500)
            cy.get('#reason-cancelation').select('Anular reserva')
            cy.wait(500)
            cy.get('#cancel-modal-btn').click()
            cy.wait(2000)
            cy.get('#notifier').contains('Se ha eliminado correctamente los datos!')
            cy.get('#reservation-table-body').find('tr').should('have.length', 2)
        })
    }
);


describe('Check student notification after cancel', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_STUDENT'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('Check student notification after reservation', () => {
            cy.get('#dropdownMenu3').click()
            cy.get('#not-list').find('li[data-notification="item"]')
                .should('have.length', 12)
        })
    }
);