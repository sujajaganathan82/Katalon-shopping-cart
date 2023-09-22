export default class CartPage {
  cartProducts = ".cart_item .product-name";
  cartProductPrices =
    "tbody tr td:nth-child(4) span.woocommerce-Price-amount.amount";
  cartRows = "tbody tr";
  cartPriceCol = "td:nth-child(4) span.woocommerce-Price-amount.amount";
  removeMessage = ".woocommerce-message";
  removeProductButton = "td a.remove";

  getCartProducts() {
    return cy.get(this.cartProducts);
  }

  getCartPrice() {
    return cy.get(this.cartProductPrices);
  }

  getCartRows() {
    return cy.get(this.cartRows);
  }

  removeLowestPricedProduct(productCount) {
    let prices = [];
    this.getCartPrice().each(($el, index, $list) => {
      const PriceWithCurrency = $el.text();
      var price = PriceWithCurrency.split("$");
      price = price[1].trim();
      prices.push(parseInt(price));
      var lowestPrice = Math.min.apply(null, prices);

      if (index == productCount - 1) {
        this.getCartRows().each(($el, index, $list) => {
          if ($el.find(this.cartPriceCol).text().includes(lowestPrice)) {
            cy.wrap($el).find(this.removeProductButton).click();
            cy.log("The lowest price item deleted");
          }
        });
      }
    });
  }

  getRemoveMessage() {
    return cy.get(this.removeMessage);
  }
}
