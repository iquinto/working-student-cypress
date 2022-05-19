
const URL = Cypress.env("BASE_URL")

describe('List and search students', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_EMPLOYER'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

    it('List and search students', () => {
            cy.get('#navbarDropdown2').click()
            cy.get('#nav-list-student').click()
            cy.wait(500)
            cy.get('[name="city"]').type('Camb')
            cy.wait(500)
            cy.get('#student-list-box').find('.float-effect').should('have.length', 1)
            cy.get('#tag_test_student1').click()
            cy.get('h1').contains('Perfil')
        })
    }
);