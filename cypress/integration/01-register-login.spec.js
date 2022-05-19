
const URL = Cypress.env("BASE_URL")

const getIframeDocument = () => {
    return cy
        .get('#description_ifr')
        .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
    return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
  }
  
  describe('test register as employer', () => {
    beforeEach(() => {
      cy.viewport('macbook-15')
      cy.visit(URL + '/register/employer')
    })
  
    it('Register as employer', () => {
      let desc = "In the past, I had a bad input element in my app that would re-render during my test and delete my input in the test."
      cy.get('#name').clear().type('Academia de Danza')
      cy.get('#username').clear().type('academiadanza')
      cy.get('#password').type('mypass123')
      cy.get('#phone').clear().type('6000754345')
      cy.get('#email').clear().type('testquinto@gmail.com')
      getIframeBody().type(desc)
  
      cy.get('#street').clear().type("Calle San Pedro 22")
      cy.get('#city').clear().type("Calafell")
      cy.get('#zipcode').clear().type("43850")
  
      cy.get('#label-province .p-button-icon-only').click()
      cy.get('.p-autocomplete-item').contains('Tarragona').click()
  
      cy.get('#label-area .p-button-icon-only').click()
      cy.get('.p-autocomplete-item').contains('Danza').click()
  
      cy.get('#website').clear().type('www.academiadanza.com')
      cy.get('#hasCompanyYes').check()
      cy.get('#registr-btn').click()
      cy.get('#notifier').contains('Se ha registrado correctamente el usuario.')
      cy.get('h1').should('have.text','Iniciar sesión')
  
    })
  
  })

  describe('test register as student', () => {
    let desc = "In the past, I had a bad input element in my app that would re-render during my test and delete my input in the test."
  
    beforeEach(() => {
      cy.viewport('macbook-15')
      cy.visit(URL + '/register/student')
    })
  
    it('Register as student', () => {
      cy.get('#name').clear().type('Lionel')
      cy.get('#surname').clear().type('Bargas')
      cy.get('#username').clear().type('test_studen101')
      cy.get('#password').type('mypass123')
      cy.get('#phone').clear().type('6000754345')
      cy.get('#email').clear().type('sfake_email@uoc.edu')
      cy.get('#birthday').invoke('removeAttr','type').type('2001-12-12{enter}');
      getIframeBody().type(desc)
      cy.get('#label-university .p-button-icon-only').click()
      cy.get('.p-autocomplete-item').contains('Universidad Oberta de Cataluña').click()
      cy.get('#studentId').clear().type('23432456UO')
      cy.get('#street').clear().type("Calle San Juan 22")
      cy.get('#city').clear().type("Calafell")
      cy.get('#zipcode').clear().type("43850")
      cy.get('#label-province .p-button-icon-only').click()
      cy.get('.p-autocomplete-item').contains('Tarragona').click()
      cy.get('#jobPositions').click().type('a{downarrow}{enter}')
      cy.get('.p-autocomplete-item').contains('Profesor/a de baile').click()
      cy.get('#jobPositions').click().type('a{downarrow}{enter}')
      cy.get('.p-autocomplete-item').contains('Profesor/a de idioma').click()
      cy.get('#hombre').check()
      cy.get('#has-car-yes').check()
      cy.get('#registr-btn').click()
      cy.get('#notifier').contains('Se ha registrado correctamente el usuario.')
      cy.get('h1').should('have.text','Iniciar sesión')
  
    })

  })


describe('test login', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
    cy.visit(URL + '/login')
  })

  it('Login correctly', () => {
      cy.get('#username').type(Cypress.env('TEST_STUDENT'))
      cy.get('#password').type(Cypress.env('TEST_PASSWORD'))
      cy.get('#login-btn').click()
      cy.get('#notifier').contains('Se ha iniciado la sessión correctamente.')
      cy.get('#current-username').contains(Cypress.env('TEST_STUDENT'))
  })
}
);
  
  