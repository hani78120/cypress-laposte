/// <reference types="cypress"/>
const { faker } = require("@faker-js/faker");
const name = faker.name.findName();
const email = faker.internet.email();

describe("Actions", () => {
  it("scenario 1", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.get("#userName").type(name);
    cy.get("#userEmail").type(email);
    cy.get("#submit").click();

    cy.get("[id=name]").should("be.visible").and("include.text", name);
    cy.get("#email").should("be.visible").and("contains.text", email);
  });
});
