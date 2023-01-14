describe('Fiber Art Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://olivia-ruth-arts-api.vercel.app/art", { fixture: "art" })
    cy.visit('http://localhost:3000/test')
  })
  it("should display an error message", () => {
    cy.get('h1')
      .should('contain', "Oops, something went wrong.")
  })
  it('should have a button to navigate back home', ()=> {
    cy.get('button')
      .should('contain', "Return Home")
  })
  it('should be able to navigate back home', ()=> {
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.oliviaPhoto')
      .should('have.attr', 'alt', 'Olivia blowing glass')
    cy.get('.aboutOlivia')
      .and('contain', 'Olivia is a student at Centre College in Danville Kentucky,')
      .and('contain', 'Much of Olivia\'s art examines ideas')
  })
})