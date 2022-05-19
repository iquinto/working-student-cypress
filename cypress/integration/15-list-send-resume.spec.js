
const URL = Cypress.env("BASE_URL")

describe('Resume crud employer', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_STUDENT'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('List and search job offer by student', () => {
            cy.get('#navbarDropdown1').click()
            cy.get('#nav-list-temporary-student').click()
            cy.wait(500)
            cy.get('#label-category .p-button-icon-only').click()
            cy.get('.p-autocomplete-item').contains('Animación').click()
            cy.wait(500)
            cy.get('#job-post-list-box').find('.float-effect').should('have.length', 1)
        })

        it('Send CV', () => {
            cy.get('#navbarDropdown1').click()
            cy.get('#nav-list-temporary-student').click()
            cy.wait(500)
            cy.get('a.thumb-container').eq(0).click()
            cy.get('h1').contains('Datos de la oferta')
            cy.get('#send-cv-toogle').click()
            cy.get('h4').contains('Enviar Curriculum')
            cy.get('#resume').select(0);
            cy.get('#on-send-cv').click();
            cy.wait(3000)

            cy.get('a.thumb-container').eq(0).contains('CV enviado a esta oferta')



        })
    }
);


