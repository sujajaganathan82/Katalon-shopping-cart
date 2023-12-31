const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    projectId: "we7v3b",
    defaultCommandTimeout: 8000,
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true,
    },
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
