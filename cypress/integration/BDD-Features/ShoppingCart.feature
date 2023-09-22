Feature: Katalon shopping cart validation

As a user
    I would like to select, add and remove items from cart
    So that I can validate the shop and cart page

Background: 
Given I navigated to the Products Page  

Scenario: Add items to the cart and remove the lowest priced item from the cart
Given I add four random items to my cart
When I view my cart
Then I find total "4" items listed in my cart
When I am able to remove the lowest price item from my cart
Then I am able to verify "3" items in my cart