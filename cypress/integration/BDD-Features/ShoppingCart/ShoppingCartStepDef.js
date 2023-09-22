///<reference types = "Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductsPage from "../../../support/pageObjects/ProductsPage";

const productsPage = new ProductsPage();

Given("I navigated to the Products Page", () => {
  cy.visit(Cypress.env("baseUrl"));
});
