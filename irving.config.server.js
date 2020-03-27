const styledComponentsConfig = require('@irvingjs/styled');

const config = {
  name: 'create-irving-app',
  packages: [
    styledComponentsConfig,
  ],
  customizeServer: (app) => {
    console.log('middleware-ran');
    app.get(
      '/components',
      (req, res) => {
        res.json({
          "defaults": [
            {
              name: "header",
              "config": {},
              "children": [],
            }
          ],
          "page": [],
          "providers": [],
          "redirectTo": '',
          "redirectStatus": 0,
        });
      }
    );
    return app;
  },
};

module.exports = config;
