describe("Auth", () => {
  it("can login", () => {
    cy.visit("/login");
    cy.get("button").click();
    cy.url().should("include", "/admin");
  });
});
