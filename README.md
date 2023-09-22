# Katalon-shopping-cart

# Cypress Automation Framework project for testing a Katalon shopping cart. 

**Project Title:** Katalon shopping cart

**Description:**
  This project is mainly concentrated on adding random items to the Katalon shopping cart and removing the lowest priced item from the cart. 

## Pre-requisites:
	  Node.js installed on your machine.
	  Visual Studio Code IDE
	  Brower’s: Chrome, Firefox, Edge

## Acceptance Criteria:
    Scenario: Add items to the cart and remove the lowest priced item from the cart
    Given I add four random items to my cart
    When I view my cart
    Then I find total "4" items listed in my cart
    When I am able to remove the lowest price item from my cart
    Then I am able to verify "3" items in my cart


## Execution Instruction:

    1. Open Visual Studio Code and clone the ShoppingCartProject from the terminal using the command - git clone https://github.com/](https://github.com/sujajaganathan82/Katalon-shopping-cart
    
    2. Go to the project directory 
    
    3. Install all the dependencies included in the package.json using the command  - npm install
    
    4. Commands to execute the tests:
      	a. To open the test runner and run the tests - 
      	npx cypress open 
      		
      	b. Command to run test in chrome, Firefox browser in headless mode.
      	npx cypress run --browser chrome  
      	npx cypress run --browser firefox 
      
      	c. Command to run test in chrome, Firefox browser in headed mode.
      	npx cypress run --headed --browser chrome  
      	npx cypress run --headed --browser firefox 
      
      	d. Command to run with tags
      	npx cypress run -e TAGS=\"@regression\” --headed --browser chrome  
      	npx cypress run -e TAGS=\"@regression\” --headed --browser firefox  
      
      	e. Command to run with Cypress DashBoard (Please Note: Actual record Key needs to be replaced in place of xxx)
      	npx cypress run -e TAGS=\"@regression\” --headed --browser chrome --record –key xxx


## Recommendations:

    1. Use of Dynamic wait.
        	Dynamic wait can be achieved by using:
        	a. Interceptors 
        	b. Should(‘condition’) function 
        	Please Note: I have made use of should(‘condition’).
    
    2. Clean up state before the tests runs and not after the test runs
    
    3. DOM related flake can be managed by using:  
          a. Query Command Retry-ability i.e, use of single query command instead of chaining. 
          b. Alternate commands and Assertions – Please Note: I have made use of this in the above project.
    
    4. Network related flake can be managed by using: 
          a. long network requests before proceeding. 
          b. Stub inconsistent network request to control response. (Mostly on lower env’s if they are slow)
    
    5. Collaborating with developers in creating data-test-id’s and using them for selecting elements.
    
    6. Make sure that Test Specs are in isolation. 
    
    7. Tests should always be able to run independently from one another and pass.
    
    8. We can add Browser stack to run tests parallel and in different browsers like Chrome, Firefox, Edge
    
    9. We can Integrate the tests in CI/CD if time permits. 
    	
    10.Data can also be passed in Data Tables as shown below:
          Scenario: Add items to the cart and remove the lowest priced item from the cart
          Given I add four random items to my cart
                | ProductName      |
                | Flying Ninja     |
                | Happy Ninja      |	
                | Patient Ninja 	 |
                | Premium Quality  |
          Please Note: I have driven data from fixtures folder.

## Screenshots of the test executions on Cypress Dashboard 

<img width="1440" alt="Cypress_Dashboard1" src="https://github.com/sujajaganathan82/Katalon-shopping-cart/assets/4892447/4db9af13-9f45-44d4-978c-042fb308209f">



<img width="1439" alt="Cypress_Dashboard_Replay" src="https://github.com/sujajaganathan82/Katalon-shopping-cart/assets/4892447/afd82fd7-38b5-4172-8efc-e02f79f7e031">



<img width="1215" alt="Cypress_Test_Video_Created" src="https://github.com/sujajaganathan82/Katalon-shopping-cart/assets/4892447/aca76e2b-5bd5-4449-8961-45d34b9302b9">



## Screenshots of the test executions on Cypress Test Runner 

<img width="1427" alt="Cypress_Test_Runner" src="https://github.com/sujajaganathan82/Katalon-shopping-cart/assets/4892447/b1f42406-7270-46bf-bede-69a0c8a5bb74">


## Screenshots of the test executions Mochawaesome report

![screencapture-file-Users-suja-Desktop-Katalon-shopping-cart-cypress-reports-index-html](https://github.com/sujajaganathan82/Katalon-shopping-cart/assets/4892447/77a95840-c72a-405c-868f-9b8ab96990c6)


