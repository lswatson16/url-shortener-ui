describe('App', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: 'existing-url.json'
    }).as('getURLs')
  })

  it('should display the page title and the existing shortened URLs', () => {
    cy.get('header > h1').contains('URL Shortener')

    cy.get('.url').children('.card').within(() => {
      cy.get('h3').should('be.visible')
      cy.get('a').should('be.visible')
      cy.get('p').should('be.visible')

    })

  })

  it.only('should display the Form with the proper inputs', () => {
    cy.get('form').should('be.visible')
      .children('input').should('have.length', 2)
  })

  it('should reflect the information in the input fields that the user typed to fill out the form', () => {
    cy.get(input)
  })

  // it('', () => {

  // })
})