describe("root page", () => {
  before(() => {
    cy.visit("/")
  })

  it("get title", () => {
    cy.intercept("/")
    cy.title(".ごっちの日記")
  })
})
