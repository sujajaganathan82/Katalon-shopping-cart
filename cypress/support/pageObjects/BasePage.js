export default class BasePage {
    cartPage = "li a[title='View cart']";
    cartTitle = ".page-title";
  
    gotoCartPage() {
      cy.get(this.cartPage).first().click();
    }
  
    getCartTitle() {
      return cy.get(this.cartTitle);
    }
  }
  