describe('Painting and Drawings Page', () => {
  beforeEach(()=> {
    cy.intercept("GET", "https://olivia-ruth-arts-api.vercel.app/art", {fixture: "art"})
    cy.visit('http://localhost:3000/')
    cy.get('[href="/art/paintings-drawings"]').click()
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
  it('should show paintings and drawings as selected in the nav bar', () => {
    cy.get('.selected').and('contain', "Paintings and Drawings")
  })
  it("should filter the art by the type, and display the paintings and drawings art", () => {
    cy.get('section').eq(0)
      .and('contain', 'Chaffing')
      .and('contain', 'December 2022')
      .and('contain', 'Charcoal on paper')
      .and('contain', 'Dimensions: 12 inches x 16 inches')
      .and('contain', 'This still life is meant to show an angry women searching for purpose and meaning in an oppressive world. Chaffing refers to the uncomfortable boundaries that surround her.')
    cy.get('.artImage').eq(0).should('have.attr', 'alt', 'Chaffing')
    cy.get('section').eq(1)
      .and('contain', 'Striped Cloth')
      .and('contain', 'December 2022')
      .and('contain', 'Charcoal on paper')
      .and('contain', 'Dimensions: 12 inches x 18 inches')
      .and('contain', 'A technical exercise of drawing a patterned textile and pushing tones.')
    cy.get('.artImage').eq(1).should('have.attr', 'alt', 'Striped Cloth')
  })
})