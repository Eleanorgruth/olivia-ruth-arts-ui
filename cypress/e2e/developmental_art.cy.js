describe('Developmental Page', () => {
  beforeEach(()=> {
    cy.intercept("GET", "https://olivia-ruth-arts-api.vercel.app/art", {fixture: "art"})
    cy.visit('http://localhost:3000/')
    cy.get('[href="/art/developmental"]').click()
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
  it('should show developmental art as selected in the nav bar', () => {
    cy.get('.selected').and('contain', "Developmental Art")
  })
  it("should filter the art by the type, and display the developmental art", () => {
    cy.get('section').eq(0)
      .and('contain', 'Remember Me')
      .and('contain', 'January 2022')
      .and('contain', 'Charcoal and collage')
      .and('contain', 'Dimensions: 10 inches x 10 inches')
      .and('contain', 'Part of a community project with Edouard Duval-Carrié at Centre College, people were asked how they remember the civil war. Olivia concentrated on forgotten black women. The terrible reality of black women\"s lives are often brushed over in history lessons, and therefore the mistreatment continues.')
    cy.get('.artImage').eq(0).should('have.attr', 'alt', 'Remember Me')
      cy.get('section').eq(1)
      .and('contain', 'Paper Chihuly')
      .and('contain', 'Fall 2021')
      .and('contain', 'Paper, Gouache, Tape, and yarn')
      .and('contain', 'Dimensions: 14 inches')
      .and('contain', 'A model of the Chihuly chandelier the Red Hornet, which memorized Olivia from a young age, at the local fine arts center.')
    cy.get('.artImage').eq(1).should('have.attr', 'alt', 'Paper Chihuly')
  })
})