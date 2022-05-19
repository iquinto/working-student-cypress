
const URL = Cypress.env("BASE_URL")

describe('Edit schedules', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_STUDENT'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

    it('Edit current schedules', () => {
        cy.get('#edit-schedule-button').click()
        cy.wait(500)
        cy.get('#select_slot_31').click()
        cy.wait(500)
        cy.get('button.ws-btn-red').click()
        cy.wait(500)
        cy.get('button.theme-button').click()
        cy.get('#notifier').contains('Se ha guardado correctamente los datos!')
        })
    }
);