describe("Books", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.get("button").click();
    cy.url().should("include", "/admin");
  });

  it("can create a book", () => {
    cy.visit("/admin/books");
    cy.get("a").contains("Create").first().click();
    // cy.location("pathname").should("eq", "/admin/books/create");
  });
});
