
const URL = Cypress.env("BASE_URL")

describe('Edit reservations', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_EMPLOYER'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('Edit reservations', () => {
            cy.get('a[data-action="reservation-edit-btn"]').first().click()
            cy.wait(500)
            cy.get('#select_slot_39').click()
            cy.get('#select_slot_40').click()
            cy.get('#select_slot_41').click()
            cy.get('button.ws-btn-red').click()
            cy.wait(500)
            cy.get('input[name="numberOfWeeks"]').clear().type('14')
            cy.wait(500)
            cy.get('button.theme-button').click()
            cy.wait(2000)
            cy.get('#notifier').contains('Se ha guardado correctamente los datos!')
            cy.get('#reservation-table-body').find('tr').should('have.length', 4)
        })

    }
);


describe('Check student notification after editing', () => {
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
                .should('have.length', 10)
        })
    }
);