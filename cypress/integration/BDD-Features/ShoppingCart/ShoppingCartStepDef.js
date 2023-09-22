///<reference types = "Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductsPage from "../../../support/pageObjects/ProductsPage";
import BasePage from "../../../support/pageObjects/BasePage";
import CartPage from "../../../support/pageObjects/CartPage";

const productList = require("../../../fixtures/productList.json"); //Data driven from fixtures

const productsPage = new ProductsPage();
const basePage = new BasePage();
const cartPage = new CartPage();

Given("I navigated to the Products Page", () => {
  cy.visit(Cypress.env("baseUrl"));
});

When(/^I add four random items to my cart$/, () => {
  productList.productName.forEach((element) => {
    Cypress.config("defaultCommandTimeout", 10000);
    cy.selectProduct(element); //selectProduct is a custom command defined in commands.js
  });
});

When(/^I view my cart$/, () => {
  basePage.gotoCartPage();
  basePage.getCartTitle().should("have.text", "Cart");
});

Then(
  /^I find total "([^"]*)" items listed in my cart$/,
  (ExpectedProductsCount) => {
    cartPage.getCartProducts().should("have.length", ExpectedProductsCount);
  }
);

When(/^I am able to remove the lowest price item from my cart$/, () => {
  cartPage.removeLowestPricedProduct(productList.productCount);
});

Then(
  /^I am able to verify "([^"]*)" items in my cart$/,
  (ExpectedProductCount) => {
    Cypress.config("defaultCommandTimeout", 10000);
    cartPage.getRemoveMessage().should("exist").and("include.text", "removed");
    cartPage.getCartProducts().should("have.length", ExpectedProductCount);
  }
);
