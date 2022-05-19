
const URL = Cypress.env("BASE_URL")


describe('Reserve schedules', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_EMPLOYER'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('Reserve schedules 1', () => {
            cy.get('#reserve-section-btn').click()
            cy.wait(500)
            cy.get('#tag_test_student1').click()
            cy.get('#reserve-schedules-btn').click()
            cy.wait(500)
            cy.get('#select_slot_2').click()
            cy.get('button.ws-btn-red').click()
            cy.wait(500)
            cy.get('input[name="numberOfWeeks"]').clear().type('15')
            cy.wait(500)
            cy.get('button.theme-button').click()
            cy.wait(2000)
            cy.get('#notifier').contains('Se ha guardado correctamente los datos!')
            cy.get('#reservation-table-body').find('tr').should('have.length', 1)
        })

        it('Reserve schedules 2', () => {
            cy.get('#reserve-section-btn').click()
            cy.wait(500)
            cy.get('#tag_test_student1').click()
            cy.get('#reserve-schedules-btn').click()
            cy.wait(500)
            cy.get('#select_slot_8').click()
            cy.get('button.ws-btn-red').click()
            cy.wait(500)
            cy.get('input[name="numberOfWeeks"]').clear().type('15')
            cy.wait(500)
            cy.get('button.theme-button').click()
            cy.wait(2000)
            cy.get('#notifier').contains('Se ha guardado correctamente los datos!')
            cy.get('#reservation-table-body').find('tr').should('have.length', 2)
        })
        it('Reserve schedules 3', () => {
            cy.get('#reserve-section-btn').click()
            cy.wait(500)
            cy.get('#tag_test_student1').click()
            cy.get('#reserve-schedules-btn').click()
            cy.wait(500)
            cy.get('#select_slot_76').click()
            cy.get('button.ws-btn-red').click()
            cy.wait(500)
            cy.get('input[name="numberOfWeeks"]').clear().type('15')
            cy.wait(500)
            cy.get('button.theme-button').click()
            cy.get('#notifier').contains('Se ha guardado correctamente los datos!')
            cy.wait(2000)
            cy.get('#reservation-table-body').find('tr').should('have.length', 3)
        })
        it('Reserve schedules 4', () => {
            cy.get('#reserve-section-btn').click()
            cy.wait(500)
            cy.get('#tag_test_student1').click()
            cy.get('#reserve-schedules-btn').click()
            cy.wait(500)
            cy.get('#select_slot_80').click()
            cy.get('button.ws-btn-red').click()
            cy.wait(500)
            cy.get('input[name="numberOfWeeks"]').clear().type('15')
            cy.wait(500)
            cy.get('button.theme-button').click()
            cy.get('#notifier').contains('Se ha guardado correctamente los datos!')
            cy.wait(2000)
            cy.get('#reservation-table-body').find('tr').should('have.length', 4)
        })
    }
);


describe('Check student notification after reservation', () => {
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
                .should('have.length', 9)
        })
    }
);