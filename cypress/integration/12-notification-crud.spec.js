
const URL = Cypress.env("BASE_URL")

describe('Notification crud employer', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_EMPLOYER'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('List, show and delete notification', () => {
            cy.get('#dropdownMenu3').click()
            cy.get('#list-all-btn').click()
            cy.get('h1').contains('Notificaciones')
            cy.get('tbody').find('tr').should('have.length', 2)
            cy.get('a[data-not-link="item"]').eq(0).click()
            cy.get('h1').contains('Notificación')
            cy.get('#delete-notification-btn').click()
            cy.get('#notifier').contains('Se ha eliminado correctamente la notificacion.')
            cy.get('tbody').find('tr').should('have.length', 1)

        })
    }
);

describe('Notification crud student', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_STUDENT'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('List, show and delete notification', () => {
            cy.get('#dropdownMenu3').click()
            cy.get('#list-all-btn').click()
            cy.get('h1').contains('Notificaciones')
            cy.get('tbody').find('tr').should('have.length', 12)
            cy.get('a[data-not-link="item"]').eq(0).click()
            cy.get('h1').contains('Notificación')
            cy.get('#delete-notification-btn').click()
            cy.get('#notifier').contains('Se ha eliminado correctamente la notificacion.')
            cy.get('tbody').find('tr').should('have.length', 11)

        })
    }
);