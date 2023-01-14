describe('Glass Page', () => {
  beforeEach(()=> {
    cy.intercept("GET", "https://olivia-ruth-arts-api.vercel.app/art", {fixture: "art"})
    cy.visit('http://localhost:3000/')
    cy.get('[href="/art/glass"]').click()
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
  it('should show glass as selected in the nav bar', () => {
    cy.get('.selected').and('contain', "Glass")
  })
  it("should filter the art by the type, and display the glass art", () => {
    cy.get('section').eq(0)
      .and('contain', 'Blue Vase')
      .and('contain', 'Spring 2022')
      .and('contain', 'Blown glass')
      .and('contain', 'Dimensions: 8 inches tall')
      .and('contain', 'Using the a color overlay, and combining two shades, Olivia achieved a swirl of vibrant color in this glass vase.')
    cy.get('.artImage').eq(0).should('have.attr', 'alt', 'Blue Vase')
      cy.get('section').eq(1)
      .and('contain', 'Scrap Vase')
      .and('contain', 'Spring 2022')
      .and('contain', 'Blown glass')
      .and('contain', 'Dimensions: 7 inches tall')
      .and('contain', 'After several failed attempts to work with cane, Olivia had gathered and hoarded a large amount of cane scraps, which she then reworked into this vase')
    cy.get('.artImage').eq(1).should('have.attr', 'alt', 'Scrap Vase')
  })
})