const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/integration/BDD-Features/*.feature",
  },
  env: {
    baseUrl: "https://cms.demo.katalon.com/",
  },
  retries: { runMode: 1, openMode: 1 },
});
