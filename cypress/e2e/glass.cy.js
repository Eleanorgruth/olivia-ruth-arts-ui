describe('Home Page', () => {
  beforeEach(()=> {
    cy.intercept("GET", "https://olivia-ruth-arts-api.vercel.app/art", {fixture: "art"})
    cy.visit('http://localhost:3000/')
    cy.get('[href="/art/glass"]').click()
  })
  it("should", () => {
    
  })
})