const URL = Cypress.env("BASE_URL")
const getIframeDocumentR = () => {
    return cy
        .get('#requirements_ifr')
        .its('0.contentDocument').should('exist')
}

const getIframeBodyR = () => {
    return getIframeDocumentR()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
}

const getIframeDocumentD = () => {
    return cy
        .get('#description_ifr')
        .its('0.contentDocument').should('exist')
}

const getIframeBodyD= () => {
    return getIframeDocumentD()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
}
describe('Job offer crud', () => {
        beforeEach(() => {
            cy.viewport('macbook-15')
            cy.visit(URL + '/login')
            cy.get('#username').type(Cypress.env('TEST_EMPLOYER'))
            cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
            cy.get('#login-btn').click()
            cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
        })

        it('Create job offer', () => {
            cy.get('#navbarDropdown2').click()
            cy.get('#nav-list-temporary-employer').click()
            cy.wait(500)
            cy.get('a.jpt-add-btn').click()
            cy.wait(500)
            cy.get('h1').contains('Publicar una oferta de trabajo')
            cy.wait(500)
            cy.get('select[name="type"]').select('Trabajo temporal')
            cy.get('input[name="title"]').type('Test Job Offer')
            cy.get('#requirements_ifr').type('Test Job Offer')
            getIframeBodyR().type("Ut enim ad minim veniam, quis nostrud  aliquip ex ea commodo consequat.")
            getIframeBodyD().type("Req lorem ipsum dolor sit amet")
            cy.get('input[name="startDate"]').invoke('removeAttr', 'type').type('2022-12-12{enter}');
            cy.get('input[name="yearSalary"]').type('20100')
            cy.wait(1000)
            cy.get('#label-area .p-button-icon-only').click()
            cy.get('.p-autocomplete-item').contains('Idioma').click()
            cy.get('input[name="expiration"]').invoke('removeAttr', 'type').type('2022-06-06');
            cy.wait(1000)
            cy.get('#create-jpt-btn').click()
            cy.wait(1000)
            cy.get('h1').contains('Datos de la oferta')
        })


        it('List and search job offer', () => {
            cy.get('#navbarDropdown2').click()
            cy.get('#nav-list-temporary-employer').click()
            cy.wait(500)
            cy.get('#label-category .p-button-icon-only').click()
            cy.get('.p-autocomplete-item').contains('Danza').click()
            cy.wait(500)
            cy.get('#job-post-list-box').find('.float-effect').should('have.length', 1)
        })

        it('Show job offer', () => {
            cy.get('#navbarDropdown2').click()
            cy.get('#nav-list-temporary-employer').click()
            cy.wait(500)
            cy.get('a.thumb-container').eq(0).click()
            cy.get('h1').contains('Datos de la oferta')
        })

        it('Edit job offer', () => {
            cy.get('#navbarDropdown2').click()
            cy.get('#nav-list-temporary-employer').click()
            cy.wait(500)
            cy.get('a.thumb-container').eq(0).click()
            cy.get('h1').contains('Datos de la oferta')
            cy.get('#edit-jp-btn').click()
            cy.wait(500)
            cy.get('input[name="yearSalary"]').type('20100')
            cy.wait(500)
            cy.get('#on-edit-send').click()
            cy.wait(500)
            cy.wait(500)
            cy.get('h1').contains('Datos de la oferta')
        })

        it('Delete job offer', () => {
            cy.get('#navbarDropdown2').click()
            cy.get('#nav-list-temporary-employer').click()
            cy.wait(500)
            cy.get('a.thumb-container').eq(0).click()
            cy.get('h1').contains('Datos de la oferta')
            cy.get('#delete-jp-btn').click()
            cy.wait(500)
            cy.get('#on-delete-btn').click()
            cy.get('h1').contains('Empleo temporal')
        })
    }
);

