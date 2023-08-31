beforeEach(() => {
  cy.visit('/')
})

describe('/posts page', () => {
  it('should render an h1', () => {
    cy.contains("Demeter's Law Demonstrations")
      .should('have.prop', 'tagName')
      .should('eq', 'H1')
  })

  it('should render testing strategies section', () => {
    cy.contains('Testing Strategies')
      .should('have.prop', 'tagName')
      .should('eq', 'H2')
  })

  it('should render the facade pattern section', () => {
    cy.contains('Facade Patter')
      .should('have.prop', 'tagName')
      .should('eq', 'H2')
  })

  it('should have a link to the posts page', () => {
    cy.contains('posts').should('have.attr', 'href', '/posts')
  })
})
