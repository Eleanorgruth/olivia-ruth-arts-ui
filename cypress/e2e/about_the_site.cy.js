describe('About the Site Page', () => {
  beforeEach(()=> {
    cy.intercept("GET", "https://olivia-ruth-arts-api.vercel.app/art", {fixture: "art"})
    cy.visit('http://localhost:3000/')
    cy.get('[href="/about"]').click()
  })
  it('should have a link to instagram', () => {
    cy.get('.instagram')
      .should('have.attr', 'href', 'https://www.instagram.com/ojrutharts/')
  })
  it('should have a link to email', () => {
    cy.get('.email')
      .should('have.attr', 'href', 'mailto: olivia.ruth@me.com')
  })
  it('should have a nav bar', () => {
    cy.get('.navStyling')
      .should('contain', 'Glass')
      .and('contain', 'Paintings and Drawings')
      .and('contain', 'Print Making')
      .and('contain', 'Fiber Art')
      .and('contain', 'Developmental Art')
      .and('contain', 'About the Site')
  })
  it('should show fiber art as selected in the nav bar', () => {
    cy.get('.selected').and('contain', "About the Site")
  })
  it('should have photo of Eleanor and Olivia', () => {
    cy.get('.eleanorAndOliviaImage')
      .should('have.attr', 'alt', 'Eleanor and Olivia')
  })
  it('should have a description', () => {
    cy.get('.aboutSiteDescription')
      .should('contain', 'Olivia\'s sister, Eleanor Ruth, created this site for her final solo project at the Turing School of Software and Design. Please reach out to Eleanor with any feedback, suggestions, or questions.')
  })
})