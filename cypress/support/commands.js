// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".products")
    .find("li[class*=instock]")
    .each(($el, index, $list) => {
      const itemName = $el.find("a h2.woocommerce-loop-product__title").text();
      if (itemName.includes(productName)) {
        cy.wrap($el).contains("Add to cart").click();
      }
    });
});
