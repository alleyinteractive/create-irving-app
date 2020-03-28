const styledComponentsConfig = require('@irvingjs/styled');
const irvingAPI = require('./irving-api');

const config = {
  name: 'create-irving-app',
  packages: [
    styledComponentsConfig,
  ],
  customizeServer: irvingAPI,
};

module.exports = config;
