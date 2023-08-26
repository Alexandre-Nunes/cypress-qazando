const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ktzaxk',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportTitle: 'Projeto QAzando',
    reportPageTitle: 'Projeto QAzando'
  },
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
