
const URL = Cypress.env("BASE_URL")

describe('Define schedules', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type('test_studen101')
            cy.get('#password').type('mypass123')
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('Define schedules', () => {
            cy.get('#edit-schedule-button').click()
            cy.wait(500)
            cy.get('#select_slot_1').click()
            cy.get('#select_slot_11').click()
            cy.get('#select_slot_21').click()
            cy.get('#select_slot_31').click()
            cy.wait(500)
            cy.get('button.ws-btn-red').click()
            cy.wait(500)
            cy.get('button.theme-button').click()
            cy.get('#notifier').contains('Se ha guardado correctamente los datos!')
        })
    }
);