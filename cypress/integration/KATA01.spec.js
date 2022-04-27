/// <reference types="cypress"/>

describe("Actions", () => {
  it("scenario 1", () => {
    cy.visit("index.html");
    cy.get('[data-cy="Q1"]').should("be.visible");
    cy.get('[data-cy="Q2"]').should("be.visible");
    cy.get('[data-cy="test1"]').should("be.visible");
    cy.get('[data-cy="test2bis"]').should("be.visible");
    cy.get('[data-cy="test3bis"]').should("be.visible");
    cy.get('[data-cy="test4bis"]').should("be.visible");

    cy.get("#pet-select").select("france").should("have.value", "france");
  });
  it("scenario 2", () => {
    cy.visit("index.html");
    cy.get('[data-cy="test4"]').click();
    cy.get('[data-cy="bouton valider"]').click();
  });
  it("scenario 3", () => {
    cy.visit("index.html");
    cy.get('[data-cy="test3"]').click();
    cy.get('[data-cy="bouton valider"]').click();
  });
});
