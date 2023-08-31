beforeEach(() => {
  cy.visit('/posts')
})

describe('/posts page', () => {
  it('should render an h1', () => {
    cy.contains('Posts').should('have.prop', 'tagName').should('eq', 'H1')
  })

  it('should render the posts list', () => {
    cy.get('[data-testid=posts-list]').should('be.visible')
  })

  it('should render a link back to home', () => {
    cy.contains('Back to Home').should('have.attr', 'href', '/')
  })
})
