
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

        it('upload cv', () => {
            cy.get('#user-cvs').find('img[data-file-icon="item"]').should('have.length', 1)
            cy.get('#add-cv-toogle').click()
            cy.get('#alias').type('CV_Candidate')
            cy.wait(1000)
            cy.get('#attach-resume').attachFile("test_cv.pdf")
            cy.wait(500)
            cy.get('input[name="description"]').clear().type('Test CV')
            cy.wait(500)
            cy.get('#upload-resume-btn').click()
            cy.wait(500)
            cy.get('#user-cvs').find('img[data-file-icon="item"]').should('have.length', 2)
        })

        it('download cv', () => {
            cy.get('#user-cvs').find('img[data-file-icon="item"]').eq(0).click()
            cy.wait(500)
            //cy.get('#download-cv-btn').click()
            cy.get('#user-cvs').find('img[data-file-icon="item"]').should('have.length', 2)
        })

        it('remove cv', () => {
            cy.get('#user-cvs').find('img[data-file-icon="item"]').should('have.length', 2)
            cy.get('#user-cvs').find('img[data-file-icon="item"]').eq(0).click()
            cy.wait(500)
            cy.get('#remove-cv-btn').click()
            cy.wait(500)
            cy.get('#user-cvs').find('img[data-file-icon="item"]').should('have.length', 1)
        })
    }
);


