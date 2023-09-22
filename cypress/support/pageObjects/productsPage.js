export default class ProductsPage {
  inStockProducts = ".products li[class*= 'instock']";

  getInStockProducts() {
    return cy.get(this.inStockProducts);
  }
}
