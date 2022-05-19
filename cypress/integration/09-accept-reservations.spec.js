
const URL = Cypress.env("BASE_URL")

describe('Accept reservations', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_STUDENT'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('Accept reservations', () => {
            cy.get('td.state-row').eq(0).contains('Pendiente')
            cy.get('svg[data-action="reservation-accept-btn"]').eq(0).click()
            cy.wait(500)
            cy.get('#accept-delete-btn').click()
            cy.wait(2000)
            cy.get('td.state-row').eq(0).contains('Aceptado')
        })
    }
);

describe('Check employer notification after accept', () => {
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
                .should('have.length', 1)
        })
    }
);