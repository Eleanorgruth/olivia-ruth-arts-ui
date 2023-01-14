describe('Home Page', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://olivia-ruth-arts-api.vercel.app/art', {fixture: 'art'})
    cy.visit('http://localhost:3000/')
  })
  it('should display a banner image', () => {
    cy.get('.bannerImage')
      .should('have.attr', 'alt', 'Olivia Ruth Arts Logo')
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
  it('should display an image of Olivia', () => {
    cy.get('.oliviaPhoto')
      .should('have.attr', 'alt', 'Olivia blowing glass')
  })
  it('should have a description about Olivia', () => {
    cy.get('.aboutOlivia')
      .and('contain', 'Olivia is a student at Centre College in Danville Kentucky,')
      .and('contain', 'Much of Olivia\'s art examines ideas')
  })
})